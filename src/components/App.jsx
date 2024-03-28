import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";
import AddNote from "./AddNote";

function App() {
    const [myNotes, setNote] = useState([]);
    const [defaultNotes, setDefaultNotes] = useState(notes);

    function addNote(note) {
        setNote(prevValues => {
            return [...prevValues, note];
        });
    }
    function deleteNote(id, isDefault) {
        if (isDefault) {
            setDefaultNotes(prevValues => {
                return prevValues.filter((item, idx) => {
                    return idx !== id;
                });
            });
        } else {
            setNote(prevValues => {
                return prevValues.filter((item, idx) => {
                    return idx !== id;
                });
            });
        }
    }

    return (
        <div>
            <Header />
            <AddNote onAdd={addNote}/>
            {myNotes.map((note, idx) => (
                <Note 
                    key={idx}
                    id={idx}
                    title={note.title} 
                    content={note.content} 
                    deleteNote={() => deleteNote(idx, false)}
                />
            ))}
            {defaultNotes.map((note, idx) => (
                <Note 
                    key={idx} 
                    id={idx}
                    title={note.title} 
                    content={note.content} 
                    deleteNote={() => deleteNote(idx, true)}
                />
            ))}
            <Footer />
        </div>
    );
}

export default App;