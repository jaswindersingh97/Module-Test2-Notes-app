import React, { useState } from 'react';
import Style from './AddNote.module.css';
import Symbol from '../utils/Symbol'; // Ensure this path is correct

function AddNote({onButtonClk}) {
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];
    const [note, setNote] = useState({ groupName: "", color: "", initials: "" });

    const handleclk = () => {
        if (note.groupName === "" || note.color === "") {
            alert("Enter all details");
        } 
        
        else {
            
            const initials = Symbol(note.groupName);
            const updatedNote = { ...note, initials };

            let notes = JSON.parse(localStorage.getItem("notes")) || [];
            let updatedNotes = [...notes, updatedNote];
            localStorage.setItem("notes", JSON.stringify(updatedNotes));
            setNote({ groupName: "", color: "", initials: "" });
            // console.log(localStorage.getItem("notes"));

            onButtonClk();  //closing the screen
        }
    };

    const handleGroupNameChange = (e) => {
        setNote({ ...note, groupName: e.target.value });
    };

    return (
        <div className={Style.container}>
            <h3>Create New Notes Group</h3>

            <div className={Style.row1}>
                <label>Group Name</label>
                <input
                    type='text'
                    value={note.groupName}
                    onChange={handleGroupNameChange}
                    placeholder='Enter your group name...'
                />
            </div>

            <div className={Style.row2}>
                <label>Choose Colour</label>
                <div className={Style.colorPicker}>
                    {colors.map((item, index) => (
                        <div
                            style={{ backgroundColor: item,
                                cursor: 'pointer',
                                border: note.color === item ? '2px solid black' : '1px solid gray',
                                transform: note.color === item ? 'scale(1.1)' : 'scale(1)',
                                transition: 'transform 0.2s ease' }}
                            key={index}
                            onClick={() => { setNote({ ...note, color: item }) }}
                        >
                        </div>
                    ))}
                </div>
            </div>
            <button onClick={handleclk}>Create</button>
        </div>
    );
}

export default AddNote;
