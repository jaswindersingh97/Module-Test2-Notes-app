import React, { useState } from 'react';
import Styles from './Left.module.css';
import { useNavigate } from 'react-router-dom';

function Left({ onButtonClk, fun}) {
  const [selectedIndex, setSelectedIndex] = useState(null);  
  const navigate = useNavigate();
  let notes = JSON.parse(localStorage.getItem("notes")) || [];

  const handleNoteClick = (index) => {
    setSelectedIndex(index); 
    navigate(`/GroupName/${index}`);
    fun();
  };

  return (
    <div className={Styles.container}>
      <div className={Styles.top}>
        <h1>Pocket Notes</h1>
      </div>
      <div className={Styles.down}>
        {
          notes.map((item, index) => {
            const isSelected = index === selectedIndex;  
            return (
              <div
                className={`${Styles.NotesGroup} ${isSelected ? Styles.selected : ''}`} 
                key={index}
                onClick={() => handleNoteClick(index)}
              >
                <span className={Styles.NotesIcon} style={{ background: item.color }}>
                  {item.initials}
                </span>
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
