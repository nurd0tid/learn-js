import React, { useState, useEffect } from 'react';
import { Button, CardBody, Col, Row } from 'react-bootstrap';

function ContentApps() {
  const [botToken, setBotToken] = useState('');
  const [urlWebsite, setUrlWebsite] = useState('');

  // Mengambil nilai dari localStorage saat komponen pertama kali dimuat
  useEffect(() => {
    const savedBotToken = localStorage.getItem('botToken');
    const savedUrlWebsite = localStorage.getItem('urlWebsite');
    
    if (savedBotToken && savedUrlWebsite) {
      setBotToken(savedBotToken);
      setUrlWebsite(savedUrlWebsite);
    }
  }, []);

  const handleSynchronizeClick = async () => {
    try {
      const response = await fetch(`https://api.telegram.org/bot${botToken}/setWebhook?url=${urlWebsite}/api/telegram/config`);
      if (response.ok) {
        // Simpan nilai ke localStorage jika berhasil
        localStorage.setItem('botToken', botToken);
        localStorage.setItem('urlWebsite', urlWebsite);
        alert('Webhook berhasil diatur!');
      } else {
        alert('Gagal mengatur webhook. Pastikan bot token dan URL website valid.');
      }
    } catch (error) {
      console.error('Terjadi kesalahan:', error);
      alert('Terjadi kesalahan saat mengatur webhook.');
    }
  };

  return (
    <div className='mt-3'>
      <div className="settings-header">
        <h5>Telegram Settings</h5>
        <p>Synchronize your settings.</p>
      </div>
      <Row>
        <Col lg={12}>
          <CardBody>
            <Row>
              <Col md={6} xl={5}>
                <div>
                  <h6>Synchronization</h6>
                  <p className='profile-email'>
                    Enter the bot token and click the button to synchronize the Telegram bot.
                    Localhost cannot receive messages.
                  </p>
                </div>
              </Col>
              <Col md={6} xl={7}>
                <div className="form-group d-flex mb-4 align-items-center">
                  <Col md={3}>
                    <label className='me-5'>URL Website</label>
                  </Col>
                  <Col md={4}>
                    <input
                      className="form-control"
                      name="url-website"
                      type="text"
                      value={urlWebsite}
                      onChange={(e) => setUrlWebsite(e.target.value)}
                    />
                  </Col>
                </div>
                <div className="form-group d-flex mb-4 align-items-center">
                  <Col md={3}>
                    <label className='me-5'>Token</label>
                  </Col>
                  <Col md={4}>
                    <input
                      className="form-control"
                      name="bot-token"
                      type="password"
                      value={botToken}
                      onChange={(e) => setBotToken(e.target.value)}
                    />
                  </Col>
                </div>
                <div className="form-group d-flex mb-4 align-items-center">
                  <Col md={3}>
                    <label className='me-5'>Synchronize</label>
                  </Col>
                  <Col md={4}>
                    <Button variant='outline-primary' onClick={handleSynchronizeClick}>
                      Synchronize now
                    </Button>
                  </Col>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Col>
      </Row>
    </div>
  );
}

export default ContentApps;
