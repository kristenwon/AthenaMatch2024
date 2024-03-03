import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import TutorPage from "./routes/TutorPage";

function App() {
  // State variables to store department and course number
  const [department, setDepartment] = useState('');
  const [courseNumber, setCourseNumber] = useState('');

  return (
    <div>
      <Router>
        <Routes>
          <Route path="/tutor-page" element={<TutorPage/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
