import React from 'react';
import '../components/SideNav.css';
import profilePic from '../components/profile-icon.png';

//Create a <link> element
const link = document.createElement('link');
link.rel = 'stylesheet';
link.href='https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"';
document.head.appendChild(link);



function SideNav() {
  return (
    <div className="sidenav">
     <img src={profilePic} alt="Profile" className="profilePic" />
      <a href="#">Profile</a>
      <a href="#">Messages</a>
      <a href="#">About</a>
    </div>
  );
}

export default SideNav;