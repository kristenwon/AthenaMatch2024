import React from 'react';
import './TutorCard.css';

function TutorCard() {
  return (
    // <div className="outer">
    //   <div className="lefthalf">
    //     <div className='tutoricon'>
    //       <img src="https://people.com/thmb/bPusbWRbciEGZBVhsDZ5UaN2Cug=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/michael-cera-021723-1-d1b41c08311a433e864dbb69714de386.jpg" style={{width:"200px",height:"auto"}} alt="Profile"></img>
    //     </div>
    //     <div>
    //       {/* replace with backend name data tutor */}
    //       Name
    //     </div>
    //   </div>
    //   <div className='outer2'>
    //     <div className='outer2_1'>
    //       <div className='outer2_a'>
    //         <div>Professor: Joe Trojan</div>
    //         <div>Grade: A-</div>
    //         <div>Fluent: English, Spanish</div>
    //       </div>
    //       <div className='outer2_b'>
    //         <button>remote</button>
    //         <button>hybrid</button>
    //       </div>
    //     </div>
    //     <div>
    //       {/* This is where calendar should go */}
    //       {/* You can add your calendar component here */}
    //     </div>
    //   </div>
    // </div>
    <div className='outer'>
        <div className='lefthalf'>
            <div className='tutoricon'>
                <img src="https://people.com/thmb/bPusbWRbciEGZBVhsDZ5UaN2Cug=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/michael-cera-021723-1-d1b41c08311a433e864dbb69714de386.jpg" alt="Profile"></img>
            </div>
            <div className='stats'>
                <div>Joe Trojan 2021</div>
                <div>Grade: A-</div>
                <div>Rating: 4.5</div>
            </div>        
        </div>
    </div>

    
  );
}

export default TutorCard;
