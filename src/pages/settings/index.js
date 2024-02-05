import React, { useState } from 'react'
import LeftSettings from '../../../components/settings/LeftSettings'
import ContentApps from '../../../components/settings/apps/ContentApps'

function Settings() {
  const [isAppsClicked, setIsAppsClicked] = useState('apps');

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
            </ul>
          </div>
        </div>
      </LeftSettings>
      <div>
        {isAppsClicked === 'apps' ? (
          <ContentApps/>
        ) : (
          <p>AAA</p>
        )}
      </div>
    </>
  )
}

export default Settings