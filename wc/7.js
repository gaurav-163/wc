import React, { useState } from 'react';

function ColorSelector() {
  const [message, setMessage] = useState('');

  const handleButtonClick = (color) => {
    setMessage(`You selected ${color} color.`);
  };

  return (
    <div>
      <h1>Color Selector</h1>
      <button onClick={() => handleButtonClick('Red')}>Red</button>
      <button onClick={() => handleButtonClick('Blue')}>Blue</button>
      <button onClick={() => handleButtonClick('Green')}>Green</button>
      <button onClick={() => handleButtonClick('Orange')}>Orange</button>
      <p>{message}</p>
    </div>
  );
}

export default ColorSelector;
