import supabase from "../../../../supabase";
import { v4 as uuidv4 } from 'uuid';
import axios from "axios";
import fs from 'fs';

export default async (req, res) => {
  const currentTimestamp = new Date().toISOString();
  const token = process.env.NEXT_TELEGRAM_TOKEN;
  const messageData = req.body.message;
  let photoFileName = '';
  let photoUrl = '';
  let messageType = '';

  if (req.body.message.text === '/start') {
    const message =
      'Selamat datang di layanan <i>Timenow</i> <b>' +
      req.body.message.from.first_name +
      '</b>.';
    const ret = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage?chat_id=${req.body.message.chat.id}&text=${message}&parse_mode=HTML`
    );
  }

  const getUserProfileResponse = await fetch(
    `https://api.telegram.org/bot${token}/getUserProfilePhotos?user_id=${req.body.message.from.id}`
  );

  const userProfileData = await getUserProfileResponse.json();

  if (userProfileData.result.photos.length > 0) {
    const photoInfo = userProfileData.result.photos[0][0];
    const photoFileId = photoInfo.file_id;

    const getFileResponse = await fetch(
      `https://api.telegram.org/bot${token}/getFile?file_id=${photoFileId}`
    );

    const fileData = await getFileResponse.json();
    photoUrl = `https://api.telegram.org/file/bot${token}/${fileData.result.file_path}`;
    photoFileName = uuidv4() + '.' + fileData.result.file_path.split('.').pop();
  }

  const user = messageData.from;

  if (messageData.text) {
    messageType = 'text';
  } else if (messageData.photo) {
    messageType = 'photo';
  } else if (messageData.video) {
    messageType = 'video';
  }

  const { data: existingUserData } = await supabase
    .from('users')
    .select('id, count_messages_seen')
    .eq('room_id', user.id)
    .single();

  let countMessagesSeen = 1; 

  if (existingUserData) {
    // Jika data sudah ada di database
    countMessagesSeen = existingUserData.count_messages_seen || 0; // Mengambil count_messages_seen dari data yang sudah ada atau 0 jika tidak ada
    if (!existingUserData.last_seen) {
      // Jika last_seen masih false, tambahkan count_messages_seen
      countMessagesSeen++;
    }
  }

  if(photoFileName) {
    // Unduh gambar dari URL
    const { data: photoResponse } = await axios.get(photoUrl, {
      responseType: 'arraybuffer',
    });

    // Simpan gambar yang diunduh di direktori 'img/users'
    fs.writeFileSync(`public/img/users/${photoFileName}`, Buffer.from(photoResponse));
  }

  const { data: userData, error: userError } = await supabase
    .from('users')
    .upsert([
      {
        room_id: user.id,
        name: `${user.first_name} ${user.last_name || ''}`,
        photo: photoFileName || '',
        last_messages: messageData.text,
        last_seen: false,
        count_messages_seen: countMessagesSeen,
        type_messages: messageType,
        message_recieve_from: 'telegram',
        updated_at: currentTimestamp,
      },
    ],
    { onConflict: ['room_id'], updateAll: true })
    .select();

  if (userError) {
    console.log(userError);
  }

  const messageText = messageData.text;
  const userId = user.id;
  const timestamp = new Date(messageData.date * 1000);

  // Menyimpan pesan ke dalam tabel 'messages'
  const { error: messageError } = await supabase
    .from('messages')
    .upsert([
      {
        user_id: userData[0].id,
        room_id: userId,
        content: messageText,
        sender_admin_type: false,
        created_at: currentTimestamp,
      },
    ]);

  if (messageError) {
    console.log(messageError);
  }

  res.status(200).send('OK');
};
