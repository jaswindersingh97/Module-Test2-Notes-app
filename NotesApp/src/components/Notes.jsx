import React, { useRef, useEffect } from 'react';
import styles from './Notes.module.css';

function Notes({ index }) {
    const containerRef = useRef(null);

    let notes = JSON.parse(localStorage.getItem("notes")) || [];
    const { data = [] } = notes[index] || {}; 

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [data]);

    return (
        <div ref={containerRef} className={styles.container}>
            {data.map((item, index) => (
                <div className={styles.Note} key={index}>
                    <div className={styles.content}>{item.message}</div>
                    <div className={styles.datetime}>
                        <p>{item.time}</p>
                        <p> &#9679;</p>
                        <p>{item.date}</p>
                    </div>

                </div>
            ))}
        </div>
    );
}

export default Notes;