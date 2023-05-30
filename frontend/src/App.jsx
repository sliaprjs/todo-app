import { useState } from 'react';
import List from './components/List'
import Sidebar from './components/Sidebar'

const NOTES = [
  {
    title: 'test',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio!",
    date: '2023-05-30',
    id: 1
  },
  {
    title: 'another test',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio!",
    date: '2023-05-30',
    id: 2
  },
  {
    title: 'teeeeeeeest!!!',
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio!",
    date: '2023-05-30',
    id: 3
  }
];

const App = () => {
  const [initialNotes, setInitialNotes] = useState(NOTES);

  const generateId = () => Math.floor(Math.random() * 1000);

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
  }

  return (
    <div className='container'>
      <Sidebar notes={initialNotes} onFormSubmit={handleAddNote}/>
      <List notes={initialNotes}/>
    </div>
  )
}

export default App
