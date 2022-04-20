import React from 'react';
import './contactList.css';

export default function ContactList() {
  return (
    <div className='main'>
      <h2>Contacts</h2>
      <div className='search'>
        <input placeholder="search" />
        <button>Add New</button>
      </div>
      <div className='table'>
        <table className="customers">
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th></th>
          </tr>
          <tr>
            <td>Paris spécialités</td>
            <td>Marie Bertrandvfdhhhhhhhhhhhhhhhhhhm,sfgd</td>
            <td>tfruuuuuurfgdkjjjjjjjjjjjjjrtrtrtrtrtrtrtegj</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
          <tr>
            <td>Paris spécialités</td>
            <td>Marie Bertrandvfdhhhhhhhhhhhhhhhhhhm,sfgd</td>
            <td>tfruuuuuurfgdkjjjjjjjjjjjjjrtrtrtrtrtrtrtegj</td>
            <td>
              <button>edit</button>
              <button>delete</button>
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
}
