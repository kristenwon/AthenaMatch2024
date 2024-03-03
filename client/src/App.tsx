import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import React from 'react';
import FindTutors from "./routes/FindTutors";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/find-tutors" element={<FindTutors/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;