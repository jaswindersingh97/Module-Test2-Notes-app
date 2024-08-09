import React, { useEffect, useState } from 'react';
import Style from './RightActual.module.css';
import SendArrow from './../assets/SendArrow.svg';
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

  const onButtonClk = () => {
    const updatedDataArray = [...dataArray, data];
    setDataArray(updatedDataArray);
    setData({ message: "", date: "", time: ""});

    let temp = notes[index];
    let updatedTemp = { ...temp, data: updatedDataArray };

    notes[index] = updatedTemp; 
    localStorage.setItem("notes", JSON.stringify(notes));
  };

  const { color, groupName, initials } = notes[index] || {};

  return (
    <div className={Style.container}>
    {/* <button onClick={fun}>test</button> */}
      <div className={Style.header}>
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
            placeholder="Enter your Text here........"
          ></textarea>
          <button onClick={onButtonClk}>
            <img src={SendArrow} alt="Send" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default RightActual;
