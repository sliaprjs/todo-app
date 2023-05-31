import React from 'react'
import Note from './Note'

const List = ({notes}) => {
  return (
    <div className='list'>
        {notes.map(item => <Note key={item.id} note={item}/>)}
    </div>
  )
}

export default List