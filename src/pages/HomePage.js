import { useState, useEffect } from 'react';
import ContactList from '../components/ContactList/ContactList';
import Header from '../components/Header/Header';
import SideBar from '../components/SideBar/SideBar';
import getContact from '../services/getContactService';
import deleteContact from '../services/deleteContactService';


export default function HomePage() {
  const [contacts, setContacts] = useState([]);

  const deleteContactHandler = async (id) => {
    try {
      await deleteContact(id);
      const filteredContact = contacts.filter((c) => c.id !== id);
      setContacts(filteredContact);
    } catch (error) {}
  };

  useEffect(() => {
    const getAllContacts = async () => {
      const { data } = await getContact();
      setContacts(data);
    };
    try {
      getAllContacts();
    } catch (error) {}
  }, []);
  return (
    <div>
      <Header />
      <div className="mainPage">
        <SideBar />
        <ContactList
          setContacts={setContacts}
          contacts={contacts}
          onDelete={deleteContactHandler}
        />
      </div>
    </div>
  );
}
