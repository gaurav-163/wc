import React from 'react';
import Car from './Car';

function App() {
  return (
    <div>
      <h1>Car Details</h1>
      <Car brand="Toyota" model="Camry" year={2022} color="Blue" />
    </div>
  );
}

export default App;