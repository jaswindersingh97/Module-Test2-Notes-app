import React from 'react'
import Styles from './Left.module.css';
function Left() {
  const groupClk =()=>{
  }
  return (
    <div className={Styles.container}>
      <div className={Styles.top} onClick={groupClk}>
      <div className={Styles.heading}>
          <h1>Pocket Notes</h1>
      </div>
      <div className={Styles.Createbutton}>
          <button>+ Create Notes group</button>
      </div>
        </div>
        
        <div className={Styles.down}>
          <div className={Styles.NotesGroup}>
          <span className={Styles.NotesIcon}>MI</span>
          <div className={Styles.NotesName}>groupname</div>
          </div>
          
        </div>
    </div>
  )
}

export default Left;
