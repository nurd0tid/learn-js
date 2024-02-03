import React from 'react'
import Sidebar from './Sidebar'

function MainLayout({ children }) {
  return (
    <div className="main-wrapper">
      <div className="content main_content">
          <Sidebar/>
          {children}
      </div>
    </div>
  )
}

export default MainLayout