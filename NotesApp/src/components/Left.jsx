import React from 'react';
import Styles from './Left.module.css';
import { useNavigate } from 'react-router-dom';
function Left({onButtonClk}) {
  const navigate=useNavigate();
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  return (
    <div className={Styles.container}>

      <div className={Styles.top}>
          <h1>Pocket Notes</h1>
        </div>
        <div className={Styles.down}>
          {
            notes.map((item,index)=>{
            return(
              <div className={Styles.NotesGroup} key={index} onClick={()=>{navigate(`/GroupName/${index}`)}}>
                <span className={Styles.NotesIcon} style={{background:item.color}}>{item.initials}</span>
                <div className={Styles.NotesName}>{item.groupName}</div>
              </div>
            )
          })
          }
          <button className={Styles.button} onClick={onButtonClk}>+</button>

        </div>
    </div>
  )
}

export default Left;
