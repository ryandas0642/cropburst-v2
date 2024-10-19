// src/App.js
import React from 'react';
import Banner from './Banner'; // Import the Banner component
import Form from './Form'; // Import the Form component

function App() {
  return (
    <div className="App">
      <Banner />
      <Form /> {/* Add the Form component */}
      {/* Other components */}
    </div>
  );
}

export default App;
