import React, {useState} from "react";
import '../components/Header.css';

function Header() {
  // State variables to store department and course number
  const [department, setDepartment] = useState('');
  const [courseNumber, setCourseNumber] = useState('');

  return (
    <div className="header">
      <div>Choose Your Class</div>
      <div className="inputs">
        <div>
          <label htmlFor="department">Department:</label>
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
            placeholder="Ex. CSCI"
          />
        </div>
        <div>
          <label htmlFor="courseNumber">Course Number:</label>
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