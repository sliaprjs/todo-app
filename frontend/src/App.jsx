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

    services.addNote(newNote).then(note => {
      setInitialNotes(initialNotes.concat(note));
      setSelectedNotes(selectedNotes.concat(note));
    });
  }

  const handleDeleteNote = (id) => {
    const confirmation = window.confirm('Are you sure?');
    if (confirmation) {
      services.deleteNote(id).then(response => {
        setInitialNotes(initialNotes.filter(note => note.id !== id));
        setSelectedNotes(selectedNotes.filter(note => note.id !== id));
      });
    }
  }

  const handleChangeNote = (id, title, date) => {

    const note = initialNotes.find(note => note.id === id);

    const newNote = {
      ...note,
      title,
      date
    }

    console.log(newNote);

    services.editNote(id, newNote).then(response => {
      setInitialNotes(initialNotes.filter(note => note.id !== id).concat(response));
      setSelectedNotes(selectedNotes.filter(note => note.id !== id).concat(response));
      console.log(initialNotes, selectedNotes);
    })
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
      <List notes={selectedNotes} onDeleteNote={handleDeleteNote} onChangeNote={handleChangeNote}/>
    </div>
  )
}

export default App
