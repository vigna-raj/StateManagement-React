import React, { useState, useEffect } from 'react'
import {useDispatch} from 'react-redux'
import { updatenote,deletenote } from '../RTK/Features/noteSlice';

const NoteItem = ({id,noteval}) => {
    const [isnoteEditable, setisnoteEditable]=useState(false);
    const [note, setnote]=useState();
    const dispatch= useDispatch();

    useEffect(()=>{
        setnote(noteval);
    },[])

    const editSave = ()=>{
        if(isnoteEditable) dispatch(updatenote({id,note}));
        setisnoteEditable(!isnoteEditable);       
    }
    
  return (
    <div className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white `}>
            <input
                type="text"
                className={`border outline-none w-full bg-transparent rounded-lg ${
                    !isnoteEditable ? "border-black/10 px-2" : "border-transparent"
                } `}
                value={note}
                onChange={(e)=>setnote(e.target.value)}
                readOnly={!isnoteEditable}
            />
            {/* Edit, Save Button */}
            <button
                className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
                onClick={editSave}
            >
                {isnoteEditable ? "📁" : "✏️"} 
            </button>
            {/* Delete note Button */}
            <button className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
            onClick={()=>{dispatch(deletenote({id}))}}>
                ❌
            </button>
        </div>
  )
}

export default NoteItem
