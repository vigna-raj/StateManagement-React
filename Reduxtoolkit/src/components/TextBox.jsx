import React, { useContext, useState } from 'react'
import { addnote } from '../RTK/Features/noteSlice';
import { useDispatch } from 'react-redux';

const TextBox = () => {

  const [note,setNote]=useState("");
  const dispatch=useDispatch();

  const add=(e)=>{
    e.preventDefault();
    if(note!="") dispatch(addnote({note}));

  }
  
  return (
    <form  className="flex" onSubmit={add}>
            <input
                type="text"
                placeholder="Write Todo..."
                className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
                onChange={(e)=>{setNote(e.target.value)}}
            />
            <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
                Add
            </button>
        </form>
  )
}

export default TextBox
