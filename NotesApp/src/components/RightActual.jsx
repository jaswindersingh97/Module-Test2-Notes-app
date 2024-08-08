import React, { useEffect, useState } from 'react';
import Style from './RightActual.module.css';
import SendArrow from './../assets/SendArrow.svg';
import Notes from './Notes';
import {useParams} from 'react-router-dom';
import DateTime from '../utils/DateTime';
function RightActual() {
  const [content,setContent]=useState("")
  const onButtonClk=()=>{
    alert(content);
    // alert(DateTime())
    setContent("")
  }
  let notes = JSON.parse(localStorage.getItem("notes")) || [];
  const {index}=useParams();
  const {color,groupName,initials}=notes[index];
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <span style={{background:color}}>{initials}</span>
        <p>{groupName}</p>
      </div>
      <div className={Style.body}>
        <Notes/>
      </div>
      <div className={Style.footer}>
      <div className={Style.Textfield}>
        <textarea value={content} onChange={(e)=>setContent(e.target.value)} placeholder='Enter your Text here........'></textarea>
        <button onClick={onButtonClk}><img src={SendArrow}/></button>
      </div>
      </div>

    </div>
  )
}

export default RightActual
