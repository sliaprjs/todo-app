import { useState } from "react"

const ShowAllNotes = ({notes, onChooseNote}) => {
  const [notesVisible, setNotesVisible] = useState(false);

  const handleNotesVisibility = () => {
    setNotesVisible(!notesVisible);
  }
  
  return (
    <>
      <button onClick={handleNotesVisibility} className='btn aside-btn'>
      <span className="aside-text">Show All</span>
      <span className="material-symbols-outlined">
      {notesVisible ? 'expand_less' : 'expand_more'}
      </span>
    </button>
    {notesVisible ? <ul className="sidebar-list">
      <li className="sidebar-item" onClick={() => onChooseNote(999)}>all</li>
      {notes.map(note => <li onClick={() => onChooseNote(note.id)} className="sidebar-item" key={note.id}>{note.title}</li>)}
    </ul> : null}
    </>
  )
}

export default ShowAllNotes