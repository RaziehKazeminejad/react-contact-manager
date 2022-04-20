import React from 'react';
import './sideBar.css';

export default function SideBar() {
  return (
    <div className="nav">
      <ul>
        <li>
          <p>Lists</p>
          <button className='btn'>
              <p style={{'paddingBottom': '1px'}}>+</p>
          </button>
        </li>
      </ul>
    </div>
  );
}
