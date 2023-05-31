import { useState } from "react";

const Note = ({note, onDeleteNote, onChangeNote}) => {
  const [formShowing, setFormShowing] = useState(false);

  const handleFormShowing = () => {
    setFormShowing(!formShowing);
  }

  return (
    <div className='note'>
      <div className="note-body">
        <span className="note-date">{note.date}</span>
        <span className="note-text">{note.title}</span>
        <div className="btn-container">
          <div className="btn change" onClick={handleFormShowing}>Change</div>
          <div className="btn delete" onClick={() => onDeleteNote(note.id)}>Delete</div>
        </div>
      </div>
      {formShowing ? <form onSubmit={(e) => {
        e.preventDefault();
        onChangeNote(note.id, e.target[0].value, e.target[1].value)
        handleFormShowing();
      }} className="inner-form">
        <input type="text" className="inner-input" placeholder="Title"/>
        <input type="date" className="inner-input" />
        <button className="btn inner-btn" type="submit">Submit</button>
      </form> : null}
    </div>
  )
}

export default Note