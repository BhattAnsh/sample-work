import React from 'react'
import '../styles/opts.css'
function OptButton({ opt1, opt2, size }) {
    const buttonContainerClass = `opt-button-container ${size}`;
  
    return (
      <div className={buttonContainerClass}>
        <div className='opt1 optActive'>{opt1}</div>
        <div className='opt2'>{opt2}</div>
      </div>
    );
  }

export default OptButton