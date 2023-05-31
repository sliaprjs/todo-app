import React from 'react'
import Note from './Note'

const List = ({notes, onDeleteNote}) => {
  return (
    <div className='list'>
        {notes.map(item => <Note key={item.id} note={item} onDeleteNote={onDeleteNote}/>)}
    </div>
  )
}

export default List