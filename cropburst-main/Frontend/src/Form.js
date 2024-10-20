// src/Form.js
import React from 'react';
import { useState } from 'react';
import { run } from './aws.py';
import './Form.css'; // Import CSS for styling
import BarChart from './BarChart'; // Import the BarChart component
import PieChart from './PieChart'; // Import the PieChart component

const Form = () => {
  // Set up state to track input values
  const [formValues, setFormValues] = useState({
    N: '',
    P: '',
    K: '',
    Temp: '',
    Humidity: '',
    Ph: '',
    Rainfall: '',
  });

  // Handle input changes
  const [result, setResult] = useState(''); // State to hold the result from the external function

  // Handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [id]: value, // Update the appropriate input's value
    }));
  };

  // Handle form submission or button click
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit

    // Call the imported function from utils.js and get the return value
    const returnValue = run(formValues);

    // Store the return value in the state
    setResult(returnValue);
  };
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="input1">Nitrogen (ratio)</label>
          <input type="text" id="input1" />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Phosphorous (ratio)</label>
          <input type="text" id="input2" />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Potassium (ratio)</label>
          <input type="text" id="input3" />
        </div>
        <div className="form-group">
          <label htmlFor="input4">Temperature (C°)</label>
          <input type="text" id="input4" />
        </div>
        <div className="form-group">
          <label htmlFor="input5">Humidity (%)</label>
          <input type="text" id="input5" />
        </div>
        <div className="form-group">
          <label htmlFor="input6">Ph level</label>
          <input type="text" id="input6" />
        </div>
        <div className="form-group">
          <label htmlFor="input7">Rainfall (mm)</label>
          <input type="text" id="input7" />
        </div>
        {/* Add the button underneath all textboxes */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
      <div className="vertical-line"></div>
      {/* Charts Section */}
      <div className="charts-container">
        <BarChart /> {/* Bar Chart */}
        <PieChart /> {/* Pie Chart */}
      </div>
    </div>
    
  );
};

export default Form;
