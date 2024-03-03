import React, {useState} from "react";
import Header from "../layouts/"

const TutorPage = () => {

    // State variables to store department and course number
    const [department, setDepartment] = useState('');
    const [courseNumber, setCourseNumber] = useState('');

    return (
        <div className="App">
          <header className="App-header">
            <div className="text-black">Choose Your Class</div>
            <div className="grid-cols-2">
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
                  <label htmlFor="courseNumber" className="text-gray-900">Course Number:</label>
                  <input
                    type="text"
                    id="courseNumber"
                    value={courseNumber}
                    onChange={(e) => setCourseNumber(e.target.value)}
                    required
                  />
                </div>
            </div>
              <button type="submit">Submit</button>
          </header>
        </div>
      );
    
}

export default TutorPage;