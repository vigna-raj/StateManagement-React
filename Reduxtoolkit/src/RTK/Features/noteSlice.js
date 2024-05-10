import { createSlice, nanoid } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "Note",
    initialState: { notes: [] },
    reducers: {
        addnote: (state, action) => {
            state.notes.push({ id: nanoid(), note: action.payload.note })
        },
        deletenote: (state, action) => {
            state.notes = state.notes.filter((note) => note.id !== action.payload.id)
        },
        updatenote: (state, action) => {
            state.notes = state.notes.map((note) => note.id == action.payload.id ? { id: action.payload.id, note: action.payload.note } : note);
        }
    }
})
export const { addnote, deletenote, updatenote } = noteSlice.actions
export default noteSlice.reducer