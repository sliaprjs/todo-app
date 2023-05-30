import {useState} from 'react'

const AddNewNote = ({notes, onFormSubmit}) => {
  const [formVisible, setFormVisible] = useState(false);

  const handleFormVisibility = () => {
    setFormVisible(!formVisible);
  }

  return (
    <>
      <button onClick={handleFormVisibility} className='btn aside-btn list-btn'>
        <span className="aside-text">Add New</span>
        <span className="material-symbols-outlined">
        {formVisible ? 'expand_less' : 'expand_more'}
        </span>
      </button>
      <form onSubmit={onFormSubmit} className={`note-form ${formVisible ? 'active' : null}`}>
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input className='form-input title'/>
        </div>
        <div className="form-group">
          <label htmlFor="text">Text:</label>
          <textarea className='form-input text' name='text' id="text" rows="3"></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="date">Date:</label>
          <input className='form-input date' type="date" name="date" id="date"/>
        </div>
        <button className="btn btn-form" type='submit'>Submit</button>
      </form>
    </>
  )
}

export default AddNewNote