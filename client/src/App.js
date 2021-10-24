import React, { useState, useEffect } from 'react';
import api from './services/api';
import './Styles.css';
import Notes from './components/Notes/Notes';
import RadioButton from './components/RadioButton/RadioButton';
import Title from './components/Title/Title';
import AnnotationsTitle from './components/Annotations/AnnotationsTitle';
import Annotations from './components/Annotations/Annotations';

export default function App() {
  const [title, setTitle] = useState('');
  const [notes, setNotes] = useState('');
  const [allNotes, setAllNotes] = useState([]);
  const [selectedValue, setSelectedValue] = useState('all');

  useEffect(() => {
    getAllNotes();
  }, []);

  useEffect(() => {
    function enableSubmitButton() {
      let button = document.getElementById('button-submit');
      button.style.backgroundColor = 'rgb(65, 87, 95)';

      if (title && notes) {
        button.style.backgroundColor = 'rgb(14, 30, 37)';
      };
    }
    enableSubmitButton();
  }, [title, notes]);

  async function getAllNotes() {
    const response = await api.get('/annotations');

    setAllNotes(response.data);
  };

  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get('/priorities', { params });

    if (response) {
      setAllNotes(response.data);
    };
  };

  function handleChange(e) {
    setSelectedValue(e.value);

    if (e.checked && e.value !== 'all') {
      loadNotes(e.value);
    } else {
      getAllNotes();
    };
  };

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/annotations', {
      title,
      notes,
      priority: false
    });

    setTitle('');
    setNotes('');

    if (selectedValue !== 'all') {
      getAllNotes();
    } else {
      setAllNotes([...allNotes, response.data]);
    };

    setSelectedValue('all');
  };

  async function handleDelete(id) {
    const deletedNote = await api.delete(`/annotations/${id}`);

    if (deletedNote) {
      setAllNotes(allNotes.filter(note => note._id !== id));
    };
  };

  async function handleChangePriority(id) {
    const note = await api.post(`/priorities/${id}`);

    if (note && selectedValue !== 'all') {
      loadNotes(selectedValue);
    } else if (note) {
      getAllNotes();
    };
  };

  return (
    <div id="app">
      <aside>
        <Title />
        <form onSubmit={handleSubmit}>
          <AnnotationsTitle title={title} setTitle={setTitle} />
          <Annotations notes={notes} setNotes={setNotes} />
        </form>
        <RadioButton selectedValue={selectedValue} handleChange={handleChange} />
      </aside>
      <main>
        <ul>
          {allNotes.map(data => (
            <Notes key={data._id} data={data} handleDelete={handleDelete} handleChangePriority={handleChangePriority} />))}
        </ul>
      </main>
    </div>
  );
};
