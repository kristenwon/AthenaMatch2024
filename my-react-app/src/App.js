import React, { useState } from 'react';
import './App.css';

function App() {
  // State variables to store department and course number
  const [department, setDepartment] = useState('');
  const [courseNumber, setCourseNumber] = useState('');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Class Information</h1>
          <div>
            <label htmlFor="department">Department:</label>
            <input
              type="integer"
              id="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="courseNumber">Course Number:</label>
            <input
              type="text"
              id="courseNumber"
              value={courseNumber}
              onChange={(e) => setCourseNumber(e.target.value)}
              required
            />
          </div>
          <button type="submit">Submit</button>
      </header>
    </div>
  );
}

export default App;
