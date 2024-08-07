import React, { useEffect } from 'react';
import Style from './RightActual.module.css';
import SendArrow from './../assets/SendArrow.svg';
import Notes from './Notes';
function RightActual(param) {
  return (
    <div className={Style.container}>
      <div className={Style.header}>
        <span>MI</span>
        <p>{param.param}</p>
      </div>
      <div className={Style.body}>
        <Notes/>
      </div>
      <div className={Style.footer}>
      <div className={Style.Textfield}>
        <textarea placeholder='Enter your Text here........'></textarea>
        <button onClick={()=>alert("hi")}><img src={SendArrow}/></button>
      </div>
      </div>

    </div>
  )
}

export default RightActual
