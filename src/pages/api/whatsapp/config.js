import { Client, LocalAuth } from 'whatsapp-web.js';
import supabase from '../../../../supabase';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import fs from 'fs';

const client = new Client({
    authStrategy: new LocalAuth()
});

client.on('authenticated', () => {
    console.log('Client is authenticated.');
});

client.on("ready", () => {
    console.log("Client is ready!");
});

client.on('message', async (message) => {
  try {
    const currentTimestamp = new Date().toISOString();
    let photoFileName = '';
    const senderNumber = message.from.replace('@c.us', '');
    const contact = await message.getContact();
    const senderName = contact.pushname;
    const senderId = message.from;
    const messageText = message.body;
    const messageType = message.type;
    const profilePicUrl = await client.getProfilePicUrl(message.from);
    const formattedNumber = await client.getFormattedNumber(message.from);

    const { data: existingUserData } = await supabase
      .from('users')
      .select('id, count_messages_seen, photo')
      .eq('room_id', senderId)
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

    // Lakukan tindakan berdasarkan pesan yang diterima
    if (profilePicUrl) {
      const photoUrl = profilePicUrl.split('?')[0];
      photoFileName = uuidv4() + '.' + photoUrl.split('.').pop();

      if (existingUserData && existingUserData.photo) {
        // Hapus foto lama jika ada
        const oldPhotoPath = `public/img/users/${existingUserData.photo}`;
        try {
          fs.unlinkSync(oldPhotoPath);
          // Simpan gambar yang diunduh di direktori 'img/users'
          if (photoFileName) {
            const { data: photoResponse } = await axios.get(profilePicUrl, {
              responseType: 'arraybuffer',
            });

            fs.writeFileSync(`public/img/users/${photoFileName}`, Buffer.from(photoResponse));
          }
        } catch (err) {
          console.error('Error saat menghapus foto lama:', err);
        }
      }else{
        // Simpan gambar yang diunduh di direktori 'img/users'
        if (photoFileName) {
            const { data: photoResponse } = await axios.get(profilePicUrl, {
              responseType: 'arraybuffer',
            });

            fs.writeFileSync(`public/img/users/${photoFileName}`, Buffer.from(photoResponse));
          }
        }
    }

    const { data: userData, error: userError } = await supabase
      .from('users')
      .upsert([
        {
          room_id: senderId,
          name: `${senderName || ''}`,
          photo: photoFileName || '',
          last_messages: messageText,
          last_seen: false,
          count_messages_seen: countMessagesSeen,
          type_messages: messageType,
          message_recieve_from: 'whatsapp',
          phone: formattedNumber,
          phone_formatted: senderNumber,
          phone_sender: senderId,
          updated_at: currentTimestamp,
        },
      ],
      { onConflict: ['room_id'], updateAll: true })
      .select();

    // Kirim pesan selamat datang jika pesan berisi "Hallo"
    if (messageText.toLowerCase().includes('hallo')) {
      const formattedText = `*Selamat datang* di _layanan Slebew Online_`;
      // Pesan dengan teks miring dan tebal
      await message.reply(formattedText);
    }

    const { error: messageError } = await supabase
      .from('messages')
      .upsert([
        {
          user_id: userData[0].id,
          room_id: senderId,
          content: messageText,
          sender_admin_type: false,
          created_at: currentTimestamp,
        },
      ]);
  } catch (error) {
    console.error('Error saat memproses pesan:', error);
  }
});

client.initialize();

export default function handler(req, res) {
    const { method } = req;

    switch (method) {
        case 'GET':
            getQrCode(req, res);
            break;
        case 'POST':
            sendMessage(req, res);
            break;
        default:
            res.setHeader('Allow', ['GET', 'POST']);
            res.status(405).end(`Method ${method} Not Allowed`);
    }
}

function getQrCode(req, res) {
    client.on('qr', (qrCode) => {
        res.status(200).json({ qrCode: qrCode });
    });
}

async function sendMessage(req, res) {
  const { roomId, phone, userId, messages } = req.body;
  try {
    const response = await client.sendMessage(roomId, messages);
        const { data: userData, error: userError } = await supabase
          .from('users')
          .update({ last_seen: true, last_messages: messages, count_messages_seen: 0, updated_at: new Date().toISOString() })
          .eq('room_id', roomId)
          .single();

        const { data: messageData, error: messageError } = await supabase
          .from('messages')
          .insert([
              { user_id: userId, room_id: roomId, content: messages, sender_admin_type: true },
          ]);

        res.send(response);
    } catch (error) {
        res.status(500).send('Something went wrong!');
        console.log(error);
    }
}