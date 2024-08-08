import React from 'react';
import Styles from './Left.module.css';
function Left() {
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  // console.log(notes);
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
          {
            notes.map((item,index)=>{
            return(
              <div className={Styles.NotesGroup} key={index}>
              <span className={Styles.NotesIcon} style={{background:item.color}}>{item.initials}</span>
              <div className={Styles.NotesName}>{item.groupName}</div>
            </div>
            )
          })
          }
          
        </div>
    </div>
  )
}

export default Left;
