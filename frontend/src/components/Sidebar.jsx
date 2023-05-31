import React from 'react'
import AddNewNote from './AddNewNote'
import ShowAllNotes from './ShowAllNotes'

const Sidebar = ({notes, onFormSubmit, onChooseNote}) => {
  return (
    <aside className='sidebar'>
      <h1 className='main-title'>Notes</h1>
      <ShowAllNotes notes={notes} onChooseNote={onChooseNote}/>
      <AddNewNote notes={notes} onFormSubmit={onFormSubmit}/>
    </aside>
  )
}

export default Sidebar