import { useState } from "react"

const ShowAllNotes = ({notes}) => {
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
      {notes.map(note => <li className="sidebar-item" key={note.id}>{note.title}</li>)}
    </ul> : null}
    </>
  )
}

export default ShowAllNotes