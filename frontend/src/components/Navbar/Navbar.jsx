import React from 'react';
import './Navbar.scss';

function Navbar() {

  return (
    <div className='navbar'>
      <div className="title">
        <span>Opt-In Management</span>
      </div>

      <div className='buttons'>
        <button className='cancel'>Cancel</button>
        <button className='save'>Save</button>
      </div>
    </div>
  )
}

export default Navbar
