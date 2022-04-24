import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import addOneContact from './services/addContactService';
import AddContact from './components/AddContact/AddContact';
import EditContact from './components/EditContact/EditContact';
import UpdateContact from './services/UpdateContact';
import getContact from './services/getContactService';

function App() {
  const [contacts, setContacts] = useState([]);

  const addContactHandler = async (contact) => {
    try {
      const { data } = await addOneContact(contact);
      setContacts([...contacts, data]);
    } catch (error) {}
  };

  const EditContactHandler = async (contact, id) => {
    try {
      await UpdateContact(id, contact);
      const { data } = await getContact();
      setContacts(data);
    } catch (error) {}
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/add"
          element={<AddContact addContactHandler={addContactHandler} />}
        />
        <Route
          path="/edit/:id"
          element={<EditContact EditContactHandler={EditContactHandler} />}
        />
      </Routes>
    </div>
  );
}

export default App;
