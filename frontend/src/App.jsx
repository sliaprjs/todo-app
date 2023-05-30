import React from 'react'
import List from './components/List'
import Sidebar from './components/Sidebar'

const NOTES = [
  {
    text: 'test',
    date: '2023-05-30',
    id: 1
  },
  {
    text: 'another test',
    date: '2023-05-30',
    id: 2
  },
  {
    text: 'teeeeeeeest!!!',
    date: '2023-05-30',
    id: 3
  }
];

const App = () => {
  return (
    <div className='container'>
      <Sidebar notes={NOTES}/>
      <List notes={NOTES}/>
    </div>
  )
}

export default App
