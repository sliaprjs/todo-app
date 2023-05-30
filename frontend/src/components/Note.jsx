import React from 'react'

const Note = ({note}) => {
  return (
    <div className='note'>
      <span className="note-date">{note.date}</span>
      <span className="note-text">{note.title}</span>
      <div className="btn-container">
        <div className="btn change">Change</div>
        <div className="btn delete">Delete</div>
      </div>
    </div>
  )
}

export default Note