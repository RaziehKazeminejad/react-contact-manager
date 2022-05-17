import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import getOneContact from '../../services/getOneContact';
import UpdateContact from '../../services/UpdateContact';

export default function EditContact() {
  const params = useParams();
  const navigate = useNavigate();
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phoneNumber: '',
  });

  const changeHandler = (e) => {
    setContact({ ...contact, [e.target.name]: e.target.value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    if (!contact.name || !contact.email || !contact.phoneNumber) {
      alert('All fields must be filled!');
      return;
    }
    try {
      await UpdateContact(params.id, contact);
      navigate('/');
    } catch (error) {}
  };

  useEffect(() => {
    const localfetch = async () => {
      try {
        const { data } = await getOneContact(params.id);
        setContact(data);
      } catch (error) {}
    };
    localfetch();
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
