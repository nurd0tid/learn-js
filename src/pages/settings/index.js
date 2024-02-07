import React, { useState } from 'react'
import LeftSettings from '../../../components/settings/LeftSettings'
import ContentApps from '../../../components/settings/apps/ContentApps'
import ContentWhatsapp from '../../../components/settings/apps/whatsapp/ContentWhatsapp';
import ContentTelegram from '../../../components/settings/apps/telegram/ContentTelegram';

function Settings() {
  const [isAppsClicked, setIsAppsClicked] = useState('telegram');

  const handleAppsClick = (e) => {
    setIsAppsClicked(e);
  }

  return (
    <>
      <LeftSettings>
        <div className="settings-card">
          <div className="settings-control">
            <ul>
              <li className="d-flex align-items-center">
                <div style={{ cursor: 'pointer' }}>
                  <span onClick={(e) => handleAppsClick('apps')}>Apps</span>
                </div>
              </li>
              <li className="d-flex align-items-center">
                <div style={{ cursor: 'pointer' }}>
                  <span onClick={(e) => handleAppsClick('telegram')}>Telegram</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </LeftSettings>
      <div>
        {isAppsClicked === 'apps' ? (
          <ContentTelegram/>
        ) : (
          <ContentWhatsapp/>
        )}
      </div>
    </>
  )
}

export default Settings