import React from 'react';
import './TutorCard.css';


function TutorCard({ tutorsList, tt }) {
  // Check if tutorsList is not empty and tt is within bounds
  if (tutorsList.length === 0 || tt >= tutorsList.length) {
    return null; // Return null if no tutors or tt out of bounds
  }

  const tutor = tutorsList[tt]; // Get the tutor based on tt index
  return (
    <div className='outer'>
        <div className='lefthalf'>
            <div className='tutoricon'>
                <img src="https://people.com/thmb/bPusbWRbciEGZBVhsDZ5UaN2Cug=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/michael-cera-021723-1-d1b41c08311a433e864dbb69714de386.jpg" alt="Profile"></img>
            </div>
            <div className='stats'>
          <div>Prof: {tutor.Prof_year}</div>
          <div>Grade: {tutor.Grade}</div>
        </div>
      </div>
      <div className='righthalf'>
        <h1 className='nametext'>
          {tutor.name}
        </h1>
        <div className='stats_2'>
          <div className='avail'>
            <div>Availability: </div>
            {tutor.Available.map((time, index) => (
              <div key={index} className='tag'>{time}</div>
            ))}
          </div>
          <div className='avail'>
            <div>Remote/Hybrid: </div>
            <div className='tag'>{tutor.environment}</div>
          </div>
          <div className='avail'>
            <div>Language: </div>
            <div className='tag'>{tutor.Fluent}</div>
          </div>
          <div className='avail'>
            <div>Rating:</div>
            <div>{tutor.Rating}</div>
          </div>
        </div>
      </div>
    </div>

    
  );
}

export default TutorCard;
