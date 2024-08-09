import React, { useEffect, useState } from 'react';
import Style from './RightActual.module.css';
// import SendArrow from './../assets/SendArrow.svg';
import Notes from './Notes';
import { useParams } from 'react-router-dom';
import DateTime from '../utils/DateTime';

function RightActual({fun}) {
  const { index } = useParams(); 
  const { date, time } = DateTime();

  const [data, setData] = useState({ message: "", date: "", time: ""});
  const [dataArray, setDataArray] = useState([]);
  
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  
  useEffect(() => {
    if (notes[index]) {
      setDataArray(notes[index].data || []);
    }
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
        <button className={Style.mobileButton} onClick={fun}>&#129120;</button>
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
