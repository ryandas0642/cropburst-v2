// src/Form.js
import React from 'react';
import './Form.css'; // Import CSS for styling

const Form = () => {
  return (
    <div className="form-container">
      <form>
        <div className="form-group">
          <label htmlFor="input1">Label 1</label>
          <input type="text" id="input1" />
        </div>
        <div className="form-group">
          <label htmlFor="input2">Label 2</label>
          <input type="text" id="input2" />
        </div>
        <div className="form-group">
          <label htmlFor="input3">Label 3</label>
          <input type="text" id="input3" />
        </div>
        <div className="form-group">
          <label htmlFor="input4">Label 4</label>
          <input type="text" id="input4" />
        </div>
        <div className="form-group">
          <label htmlFor="input5">Label 5</label>
          <input type="text" id="input5" />
        </div>
        <div className="form-group">
          <label htmlFor="input6">Label 6</label>
          <input type="text" id="input6" />
        </div>
        <div className="form-group">
          <label htmlFor="input7">Label 7</label>
          <input type="text" id="input7" />
        </div>
        {/* Add the button underneath all textboxes */}
        <button type="submit" className="submit-button">Submit</button>
      </form>
    </div>
  );
};

export default Form;
