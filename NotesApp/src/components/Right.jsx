import React from 'react'
import backgroundImage from './../assets/backgroundImage.png'
import Styles from './Right.module.css';
function Right() {
  return (
    <div className={Styles.container}>

    <div className={Styles.body}>
        <img src={backgroundImage} alt='backgroundImage' />
        <h1>Pocket Notes</h1>
        <p>Send and receive messages without keeping your phone online.</p>
        <p>Use Pocket Notes on up to 4 linked devices and 1 mobile phone</p>
    </div>

    <div className={Styles.footer}>
        <p>🔒end-to-end encrypted</p>
    </div>
      
    </div>
  )
}

export default Right
