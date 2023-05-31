import axios from 'axios';

const baseUrl = 'http://localhost:3000/notes';

const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
}

const addNote = (newObj) => {
  const request = axios.post(baseUrl, newObj);
  return request.then(response => response.data);
}

const deleteNote = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data);
}

const editNote = (id, newObj) => {
  const request = axios.put(`${baseUrl}/${id}`, newObj);
  return request.then(response => response.data);
}

export default {
  getAll,
  addNote,
  deleteNote,
  editNote
}