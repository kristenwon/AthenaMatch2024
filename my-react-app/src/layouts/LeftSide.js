import React from 'react';
import '../components/SideNav.css';
import profilePic from '../components/profile-icon.png';

//Create a <link> element
const link = document.createElement('link');
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet';
document.head.appendChild(link);

function SideNav() {
  return (
    <div className="sidenav">
     <img src={profilePic} alt="Profile" className="profilePic" />
      <a href="#">Profile</a>
      <a href="#">Direct Messages</a>
      <a href="#">About</a>
    </div>
  );
}

export default SideNav;