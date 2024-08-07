import React, { useEffect } from 'react'
import Styles from './Left.module.css';
function Left() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
      <div className={Styles.heading}>
          <h1>Pocket Notes</h1>
      </div>
      <div className={Styles.Createbutton}>
          <button>+ Create Notes group</button>
      </div>
        </div>
        
        <div className={Styles.down}>
          <div className={Styles.NotesGroup}>
          {notes.map((item,index)=>{
            console.log(index,item.color,item.initials,item.groupName)
            {<span className={Styles.NotesIcon}>MI</span>}
            
          }
          )}
          <span className={Styles.NotesIcon}>MI</span>
          <div className={Styles.NotesName}>groupname</div>
          </div>
          
        </div>
    </div>
  )
}

export default Left;
