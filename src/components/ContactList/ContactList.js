import React, { useState, useEffect } from 'react';
import './contactList.css';
import AddContact from '../AddContact/AddContact';
import axios from 'axios';
import { Link } from 'react-router-dom';

export default function ContactList({
  contacts,
  onDelete,
  id,
}) {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    _getPhoto();
  }, []);

  const _getPhoto = async () => {
    try {
      const result = await axios.get('http://localhost:3001/contacts');
      setPhoto(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="main">
      <h2>Contacts</h2>
      <div className="search">
        <input placeholder="search" type="text" name="seatch" />
        <div>
          <Link to={`/edit/${id}`}>
            <button className="uploadBtn">Upload</button>
          </Link>

          <Link to="/add">
            <button>Add New</button>
          </Link>
        </div>
      </div>
      <div className="table">
        <table className="customers">
          <tr>
            <th>
              <input type="checkbox" />
              Name
            </th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
          {contacts.map((contact) => {
            const { name, avatar, email, phoneNumber, id } = contact;
            return (
              <tr key={id}>
                <td>
                  <input type="checkbox" />
                  <img src={avatar} alt="Avatar" />
                  {name}
                </td>
                <td>{email}</td>
                <td>{phoneNumber}</td>
                <td>
                  <Link to={`/edit/${id}`}>
                    <button>edit</button>
                  </Link>
                  <button onClick={() => onDelete(id)}>delete</button>
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </div>
  );
}
