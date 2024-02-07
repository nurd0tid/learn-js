import React, { useEffect, useState } from 'react';
import { Image, Spinner } from 'react-bootstrap';
import { useQRCode } from 'next-qrcode'

function ContentWhatsapp() {
  const { SVG } = useQRCode();
  const [qrCode, setQrCode] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchQrCode = async () => {
      try {
        const response = await fetch('/api/whatsapp/config');
        if (response.ok) {
          const data = await response.json(); // Mengambil data JSON dari respons
          setQrCode(data.qrCode);
        } else {
          console.error('Failed to fetch QR Code');
        }
      } catch (error) {
        console.error('Error fetching QR Code:', error);
        setIsLoading(false); // Jika terjadi kesalahan, nonaktifkan loading
      }
    };

    fetchQrCode();
  }, []);

  return (
    <div className='mt-5'>
      {qrCode && (
        <SVG
          text={qrCode}
          options={{
            margin: 2,
            width: 200,
            color: {
              dark: '#010599FF',
              light: '#FFBF60FF',
            },
          }}
        />
      )}
    </div>
  );
}

export default ContentWhatsapp;