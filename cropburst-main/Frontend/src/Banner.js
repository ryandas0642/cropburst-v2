// src/Banner.js
import React from 'react';
import './Banner.css';
import logoImage from './assets/Cropblast logo1.png'; // Example of importing an image from src/assets folder
import profileImage1 from './assets/Anuj-Profile.png';
import profileImage2 from './assets/Anuj-Profile.png';
import profileImage3 from './assets/Anuj-Profile.png';
import profileImage4 from './assets/Anuj-Profile.png';


const Banner = () => {
  return (
    <div className="banner">
      <img src={logoImage} alt="Logo" className="banner-logo" /> {/* Add image with class for styling */}
      <div className="text-container">
        <h1>TidalHack 2024</h1>
        <p className="subtext">By: Tayte, Ryan, Zarek, and Anuj</p>
      </div>
      <div className="image-container">
        <img src={profileImage1} alt="Profile 1" className="profile-image" />
        <img src={profileImage2} alt="Profile 2" className="profile-image" />
        <img src={profileImage3} alt="Profile 3" className="profile-image" />  
        <img src={profileImage4} alt="Profile 4" className="profile-image" />
      </div>
    </div>
  );
};

export default Banner;
