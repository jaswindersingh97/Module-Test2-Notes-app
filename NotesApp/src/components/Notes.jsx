import React from 'react';
import styles from './Notes.module.css';

function Notes(Notesgroup) {
    // console.log(Notesgroup);
  return (
    <div className={styles.container}>
        <div className={styles.Note}>
            <div className={styles.datetime}>
                <p>10:10 Am</p>
                <p>9 March 2023</p>
            </div>
            <div className={styles.content}>
            Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.
            </div>
        </div>
        <div className={styles.Note}>
            <div className={styles.datetime}>
                <p>10:10 Am</p>
                <p>9 March 2023</p>
            </div>
            <div className={styles.content}>
            Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.
            </div>
        </div>
        <div className={styles.Note}>
            <div className={styles.datetime}>
                <p>10:10 Am</p>
                <p>9 March 2023</p>
            </div>
            <div className={styles.content}>
            Another productive way to use this tool to begin a daily writing routine. One way is to generate a random paragraph with the intention to try to rewrite it while still keeping the original meaning. The purpose here is to just get the writing started so that when the writer goes onto their day's writing projects, words are already flowing from their fingers.
            </div>
        </div>
      
    </div>
  )
}

export default Notes
