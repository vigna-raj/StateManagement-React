import { useState } from "react";
import NoteContext from "./Notecontext";

const NoteContextProvider = (props) => {
    const [notes, setNotes] = useState([]);
    const addNote = (note) => {
        setNotes((prevNotes) => [{ id: Date.now(), note: note }, ...prevNotes])
    }
    const deletenote = (id) => {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id ))
    }
    const updatenote = (id, note) => {
        setNotes(notes.map((prevNotes)=>(prevNotes.id===id?{id:id,note:note}:prevNotes)))
    }
    return (
        <NoteContext.Provider value={{ notes,addNote, deletenote, updatenote }}>
            {props.children}
        </NoteContext.Provider>
    )
};
export default NoteContextProvider
