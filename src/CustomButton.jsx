import React, { useState } from 'react';
import './style.css'

const CustomButton = () => {
  const [displayText, setDisplayText] = useState('');
  const [showPopup, setShowPopup] = useState(false);

  const myFuncA=(e)=>{
    setDisplayText(displayText=== '' ? 'winter is coming!' : '');
  }
  const myFuncB=(e)=>{
    const buttonB=e.target;
    buttonB.classList.toggle('add');
    alert("Warning!!!")

  }
  const showHoverText = () => {
    setShowPopup(true);
  };

  const hideHoverText = () => {
    setShowPopup(false);
  };
  return (
    <div className='style'>
        <button onClick={myFuncA}>ButtonA</button>
        <button onClick={myFuncB}>ButtonB</button>
        <button onMouseEnter={showHoverText} onMouseLeave={hideHoverText}>ButtonC</button>

        {displayText && <p className='displaytext'>{displayText}</p>}
        {showPopup && <p className='popup'>button</p>}
    </div>
  )
}

export default CustomButton