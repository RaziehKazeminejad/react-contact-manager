import { useState, useEffect } from 'react';
import ContactList from '../components/ContactList/ContactList';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import getContact from '../services/getContactService';
import deleteContact from '../services/deleteContactService';


export default function HomePage() {

  return (
    <div>
      <Header />
      <div className="mainPage">
        <SideBar />
        <ContactList
        />
      </div>
    </div>
  );
}
