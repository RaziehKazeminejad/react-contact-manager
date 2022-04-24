import React, { useState, useEffect } from 'react';
import './contactList.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import deleteContact from '../../services/deleteContactService';
import getContact from '../../services/getContactService';

export default function ContactList(props) {
  const [contacts, setContacts] = useState(null);
  const [allContacts, setAllContacts] = useState(null);
  const [photo, setPhoto] = useState([]);
  const [searchItem, setSearchItem] = useState('');

  useEffect(() => {
    _getPhoto();
    const getAllContacts = async () => {
      const { data } = await getContact();
      setContacts(data);
      setAllContacts(data);
    };
    try {
      getAllContacts();
    } catch (error) {}
  }, []);

  const _getPhoto = async () => {
    try {
      const result = await axios.get('http://localhost:3001/contacts');
      setPhoto(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
    } catch (error) {
      console.log('error');
    }
  };

  const searchHandler = (e) => {
    const search = e.target.value;
    setSearchItem(search);
    if (search != '') {
      const filteredContacts = allContacts.filter((c) => {
        return Object.values(c)
          .join(' ')
          .toLowerCase()
          .includes(search.toLowerCase());
      });
      setContacts(filteredContacts);
    } else {
      setContacts(allContacts);
    }
  };

  return (
    <div className="main">
      <h2>Contacts</h2>
      <div className="search">
        <input
          type="text"
          value={searchItem}
          onChange={searchHandler}
          className="search"
          placeholder="Search..."
        />
        <div>
          <button className="uploadBtn">Upload</button>
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
          {contacts ? (
            contacts.map((contact) => {
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
                    <button onClick={() => deleteContactHandler(id)}>
                      delete
                    </button>
                  </td>
                </tr>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </table>
      </div>
    </div>
  );
}
