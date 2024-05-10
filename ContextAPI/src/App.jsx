import { useContext} from 'react'
import NoteItem from './components/NoteItem'
import './App.css'
import TextBox from './components/TextBox'
import NoteContext from './context/Notecontext';

function App() {
    const {notes}=useContext(NoteContext);
  return (
    <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        <TextBox/>
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {notes.map((note)=>(
                        <div key={note.id} className='w-full'>
                            <NoteItem id={note.id} noteval={note.note} />
                        </div>
                        ))}
                    </div>
                </div>
            </div>
  )
}

export default App
