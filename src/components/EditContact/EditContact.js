import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getOneContact from '../../services/getOneContact';

export default function EditContact({ EditContactHandler }) {
  const params = useParams();
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
    EditContactHandler(contact, params.id);
    setContact({ name: '', email: '', phoneNumber: '', avatar: '' });
    navigate('/');
  };

  useEffect(() => {
    getOneContact(params.id)
      .then((res) =>
        setContact({
          name: res.name,
          email: res.email,
          phoneNumber: res.phoneNumber,
          avatar: res.avatar,
        })
      )
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="addContact">
      <form className="form" onSubmit={submitForm}>
        <h2>Edit Contact</h2>
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
        <button type="submit">Edit Contact</button>
      </form>
    </div>
  );
}
