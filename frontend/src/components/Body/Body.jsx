import React from 'react';
import './Body.scss';

import OptCards from '../OptCards/OptCards';

function Body() {

  return (
    <div className='body-component'>

            <div className="title">
                <span>Opt-In Management</span>
            </div>

            <div className="body-coponents-container">
                
                <OptCards optCard="in" />

                <OptCards optCard="out" />

            </div>
      
    </div>
  )
}

export default Body
