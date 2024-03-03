import React from 'react';
import './TutorCard.css';


function TutorCard() {
  return (
    <div className='outer'>
        <div className='lefthalf'>
            <div className='tutoricon'>
                <img src="https://people.com/thmb/bPusbWRbciEGZBVhsDZ5UaN2Cug=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/michael-cera-021723-1-d1b41c08311a433e864dbb69714de386.jpg" alt="Profile"></img>
            </div>
            <div className='stats'>
                <div>Prof: Joe Trojan 2021</div>
                <div>Grade: A-</div>
            </div>        
        </div>
        <div className='righthalf'>
          <h1 className='nametext'>
            Put Name Here
          </h1>
          <div className='stats_2'>
            <div className='avail'>
              <div>Availability: </div>
              <div className='tag'>9:00 AM</div>
              <div className='tag'>1:30 PM</div>
              <div className='tag'>2:45 PM</div>

            </div>
            <div className='avail'>
              <div>Remote/Hybrid: </div>
                <div className='tag'>Hybrid</div>
            </div>
            <div className='avail'>
              <div>Language: </div>
              <div className='tag'>English</div>
            </div>
            <div className='avail'>
              <div>Rating:</div>
              <div>4.5</div>
            </div>
          </div>
        </div>
    </div>

    
  );
}

export default TutorCard;
