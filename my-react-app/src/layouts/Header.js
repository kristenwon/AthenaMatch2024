import React, {useState} from "react";
import '../components/Header.css';

//Create a <link> element
const link = document.createElement('link');
link.rel = 'stylesheet'
link.href = 'https://fonts.googleapis.com/css2?family=Josefin+Slab:ital,wght@0,100..700;1,100..700&display=swap" rel="stylesheet';
document.head.appendChild(link);

function Header() {
  // State variables to store department and course number
  const [department, setDepartment] = useState('');
  const [courseNumber, setCourseNumber] = useState('');

  return (
    <div className="header">
      <div className="title">Choose Your Class:</div>
      <div className="inputs">
        <div className="dept">
          <label htmlFor="department">Department: </label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Ex. CSCI"
          />
        </div>
        <div>
          <label htmlFor="courseNumber">Course Number: </label>
          <input
            type="text"
            id="courseNumber"
            value={courseNumber}
            onChange={(e) => setCourseNumber(e.target.value)}
            placeholder="Ex. 104"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;