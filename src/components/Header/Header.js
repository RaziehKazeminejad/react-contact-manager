import React, { useState, useEffect } from 'react';
import './header.css';
import axios from 'axios';

export default function Header() {
  const [photo, setPhoto] = useState([]);

  useEffect(() => {
    _getPhoto();
  }, []);

  const _getPhoto = async () => {
    try {
      const result = await axios.get('https://reqres.in/api/users/2');
      setPhoto(result.data.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="header">
      <h2>Contact Manager</h2>
      <img src={photo.avatar} alt="Avatar" />
    </div>
  );
}
