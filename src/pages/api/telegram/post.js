import supabase from "../../../../supabase";

export default async function handler(req, res) {
    const currentTimestamp = new Date().toISOString();

    if (req.method === 'POST') {
        try {
            const { roomId, userId, messages } = req.body;
            const token = process.env.NEXT_TELEGRAM_TOKEN;

            const response = await fetch(`https://api.telegram.org/bot${token}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: roomId,
                    text: messages,
                }),
            });

            if (response.ok) {
                // Berhasil mengirim pesan ke Telegram, sekarang update tabel users dan insert pesan ke Supabase
                const { data: userData, error: userError } = await supabase
                    .from('users')
                    .update({ last_seen: true, last_messages: messages, count_messages_seen: 0, updated_at: currentTimestamp })
                    .eq('room_id', roomId)
                    .single();

                if (userError) {
                    console.error('Error updating user data in Supabase:', userError.message);
                }

                const { data: messageData, error: messageError } = await supabase
                    .from('messages')
                    .insert([
                        { user_id: userId, room_id: roomId, content: messages, sender_admin_type: true },
                    ]);

                if (messageError) {
                    console.error('Error inserting message into Supabase:', messageError.message);
                }

                res.status(200).json({ success: true });
            } else {
                console.error('Error sending message to Telegram:', response.status);
                res.status(500).json({ success: false });
            }
        } catch (error) {
            console.error('Error sending message:', error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).end(); // Method not allowed
    }
}
