import React from 'react'
import Note from './Note'

const List = ({notes, onDeleteNote, onChangeNote}) => {
  return (
    <>
      <div className='list'>
        <h2 className='list-title'>Note List</h2>
        {notes.map(item => <Note key={item.id} note={item} onDeleteNote={onDeleteNote} onChangeNote={onChangeNote}/>)}
      </div>
    </>
  )
}

export default List