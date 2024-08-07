import React, { useState } from 'react';
import Style from './AddNote.module.css';

function AddNote() {
    const colors = ["#B38BFA", "#FF79F2", "#43E6FC", "#F19576", "#0047FF", "#6691FF"];
    // const [color, setColor] = useState("white");

    return (
        <div className={Style.container}>
            <h3>Create New Notes Group</h3>

            <div className={Style.row1}>
            <label>Group Name</label>
            <input type='text' placeholder='Enter your group name....'/>
            </div>

            <div className={Style.row2}>
            <label>Choose Colour</label>
            <span className={Style.colorPicker}>
                {colors.map((item, index) => (
                    <div
                        style={{ backgroundColor: item, cursor: 'pointer' }}
                        key={index}
                        // onClick={() => setColor(item)}
                    >
                    </div>
                ))}
            </span>
            </div>
        </div>
    );
}

export default AddNote;
