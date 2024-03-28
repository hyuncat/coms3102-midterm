import React from "react";

function Note(props) {
    function deleteNote() {
        props.deleteNote(props.id);
    }

    return (
        <div key={props.key} className="note">
            <h1>{props.title}</h1>
            <p>{props.content}</p>
            <button onClick={deleteNote}>DELETE</button>
        </div>
    );
}

export default Note;