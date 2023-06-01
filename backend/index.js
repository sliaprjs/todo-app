const { response } = require('express');
const express = require('express');
const app = express();

app.use(express.json());

let notes = [
  {
    "title": "test",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio!",
    "date": "2023-05-30",
    "id": 1
  },
  {
    "title": "second test",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio!",
    "date": "1990-12-24",
    "id": 2
  },
  {
    "title": "teeeeeeeest!!!",
    "text": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, optio!",
    "date": "2023-05-30",
    "id": 3
  },
  {
    "title": "Another test",
    "text": "lorem ipsum",
    "date": "2023-05-31",
    "id": 4
  }
];

// Start page
app.get('/', (req, res) => {
  res.send('<h1>Notes App</h1>')
})

// Get all
app.get('/api/notes', (req, res) => {
  res.json(notes);
})

// Get single
app.get('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  const note = notes.find(note => note.id === id);
  if (note) {
    res.json(note);
  } else {
    res.status(404).end();
  }
})

// Delete
app.delete('/api/notes/:id', (req, res) => {
  const id = +req.params.id;
  notes = notes.filter(note => note.id !== id);
  console.log(id);
  res.status(204).end();
})

const generateId = () => {
  const maxId = notes.length > 0 ? Math.max(...notes.map(n => n.id)) : 0;
  return maxId + 1;
}

// Add new note
app.post('/api/notes', (req, res) => {
  const body = req.body;
  if (!body.title) {
    return res.status(400).json({
      error: 'content missing'
    })
  }

  const note = {
    title: body.title,
    text: body.text,
    date: body.date,
    id: generateId()
  }

  notes = notes.concat(note);
  res.json(note);

})

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
})