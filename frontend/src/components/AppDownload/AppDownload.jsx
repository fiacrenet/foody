import React from 'react'
import '../../styles/AppDownload.css'
import { assets } from '../../assets/assets'

const AppDownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p> For Better Experience Download <br /> Foody's App </p>
        <div className='app-download-platforms'>
            <img src={assets.play_store} alt="download Foody's application for playstore " />
            <img src={assets.app_store} alt="download Foody's application for appstore " />
        </div>
      
    </div>
  )
}

export default AppDownload
