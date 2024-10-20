// src/Form.js
import React from 'react';
import './Form.css'; // Import CSS for styling

const Form = () => {
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
    </div>
    
  );
};

export default Form;
