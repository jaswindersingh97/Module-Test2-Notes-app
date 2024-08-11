import React, { useEffect, useState } from 'react';
import Style from './RightActual.module.css';
// import SendArrow from './../assets/SendArrow.svg';
import Notes from './Notes';
import { useNavigate, useParams } from 'react-router-dom';
import DateTime from '../utils/DateTime';

function RightActual({fun}) {
  const { index } = useParams(); 
  const { date, time } = DateTime();
  const navigate =useNavigate();
  const [data, setData] = useState({ message: "", date: "", time: ""});
  const [dataArray, setDataArray] = useState([]);
  
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
  useEffect(() => {
    if (notes[index]) {
      setDataArray(notes[index].data || []);
    }
    else{
      navigate("/error")
    }
    setData({message: "", date: "", time: ""})
  }, [index]);

  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      event.preventDefault();
      onButtonClk();
    }
  };
  const onButtonClk = () => {
    if (data.message.trim()){
    const updatedDataArray = [...dataArray, data];
    setDataArray(updatedDataArray);
    setData({ message: "", date: "", time: ""});

    let temp = notes[index];
    let updatedTemp = { ...temp, data: updatedDataArray };

    notes[index] = updatedTemp; 
    // const reorderedNotes = [notes[index], ...notes.slice(0, index), ...notes.slice(index + 1)]; 
    // If we need to reorder them one of the issue is the page is still the same, and the index of the page is changed hence will fail 
    localStorage.setItem("notes", JSON.stringify(notes));
    }
  };

  const { color, groupName, initials } = notes[index] || {};

  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <button className={Style.mobileButton} onClick={fun}>
          <svg width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.27495 10.85C6.47495 10.65 6.57095 10.4083 6.56295 10.125C6.55495 9.84167 6.45061 9.6 6.24995 9.4L3.42495 6.575H14.5749C14.8583 6.575 15.0959 6.479 15.2879 6.287C15.4799 6.095 15.5756 5.85767 15.5749 5.575C15.5749 5.29167 15.4789 5.054 15.2869 4.862C15.0949 4.67 14.8576 4.57433 14.5749 4.575H3.42495L6.27495 1.725C6.47495 1.525 6.57495 1.28733 6.57495 1.012C6.57495 0.736666 6.47495 0.499333 6.27495 0.3C6.07495 0.0999997 5.83728 0 5.56195 0C5.28661 0 5.04928 0.0999997 4.84995 0.3L0.274948 4.875C0.174948 4.975 0.103947 5.08333 0.0619469 5.2C0.0199471 5.31667 -0.000720024 5.44167 -5.34058e-05 5.575C-5.34058e-05 5.70833 0.0209484 5.83333 0.0629482 5.95C0.104948 6.06667 0.175614 6.175 0.274948 6.275L4.87495 10.875C5.05828 11.0583 5.28728 11.15 5.56195 11.15C5.83661 11.15 6.07428 11.05 6.27495  10.85Z" fill="white"/>
          </svg>
        </button>
        <span style={{ background: color }}>{initials}</span>
        <p>{groupName}</p>
      </div>
      <div className={Style.body}>
        <Notes index={index}/>
      </div>
      <div className={Style.footer}>
        <div className={Style.Textfield}>
          <textarea
            value={data.message}
            onChange={(e) => {
              setData({ ...data, message: e.target.value, date, time });
            }}
            onKeyDown={handleKeyDown}
            placeholder="Enter your Text here........"
          ></textarea>
          <button onClick={onButtonClk}
                  disabled={!data.message.trim()} 
        className={data.message.trim() ? Style.button_enabled : Style.button_disabled}
>
          {/* button */}
            {/* <img src={SendArrow} alt="Send" /> */}
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightActual;
