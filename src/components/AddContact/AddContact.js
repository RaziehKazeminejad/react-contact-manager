import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './addContact.css';

export default function AddContact({ addContactHandler }) {
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    avatar: '',
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.phoneNumber) {
      alert('All fields must be filled!');
      return;
    }
    addContactHandler(contact);
    setContact({ name: '', email: '', phoneNumber: '', avatar: '' });
    navigate('/');
  };

  return (
    <div className="addContact">
      <form className="form" onSubmit={submitForm}>
        <h2>Add Contact</h2>
        <div className="formControl">
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={contact.name}
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>Email</label>
          <input
            type="text"
            name="email"
            value={contact.email}
            onChange={changeHandler}
          />
        </div>
        <div className="formControl">
          <label>Phone Number</label>
          <input
            type="text"
            name="phoneNumber"
            value={contact.phoneNumber}
            onChange={changeHandler}
          />
        </div>
        <button type="submit">Add Contact</button>
      </form>
    </div>
  );
}
