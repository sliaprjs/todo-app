import { useState, useEffect } from 'react';
import services from './services/axios';

import List from './components/List'
import Sidebar from './components/Sidebar'

const App = () => {
  const [initialNotes, setInitialNotes] = useState([]);
  const [selectedNotes, setSelectedNotes] = useState([]);

  useEffect(() => {
    services.getAll().then(notes => {
      setInitialNotes(notes);
      setSelectedNotes(notes);
    })
  }, [])

  const generateId = () => Math.max(...initialNotes.map(note => note.id)) + 1;

  const handleAddNote = (e) => {
    e.preventDefault();

    const newNote = {
      title: e.target[0].value,
      text: e.target[1].value,
      date: e.target[2].value,
      id: generateId()
    }

    console.log(newNote);

    setInitialNotes(initialNotes.concat(newNote));
    setSelectedNotes(selectedNotes.concat(newNote));

    console.log(initialNotes, selectedNotes);
  }

  const handleChooseNote = (id) => {
    console.log(id);
    if (id === 999) {
      setSelectedNotes(initialNotes);
      return;
    }

    const note = initialNotes.find(note => note.id === id);
    setSelectedNotes([note]);
  }

  return (
    <div className='container'>
      <Sidebar notes={initialNotes} onFormSubmit={handleAddNote} onChooseNote={handleChooseNote}/>
      <List notes={selectedNotes}/>
    </div>
  )
}

export default App
