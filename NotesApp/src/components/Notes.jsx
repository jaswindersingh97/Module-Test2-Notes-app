import React from 'react';
import styles from './Notes.module.css';

function Notes({index}) {
    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const { data = [] } = notes[index] || {}; 
    return (
    <div className={styles.container}>
    {data.map((item,index)=>{
        return(
            <div className={styles.Note} key={index}>
            <div className={styles.datetime}>
                <p>{item.time}</p>
                <p>{item.date}</p>
            </div>
            <div className={styles.content}>{item.message}</div>
        </div>
        )
    })}      
    </div>
  )
}

export default Notes
