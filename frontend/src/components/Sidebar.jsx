import React from 'react'
import AddNewNote from './AddNewNote'
import AllNotes from './AllNotes'

const Sidebar = ({notes}) => {
  return (
    <aside className='sidebar'>
      <h1>Notes</h1>
      <AllNotes notes={notes}/>
      <AddNewNote notes={notes}/>
    </aside>
  )
}

export default Sidebar