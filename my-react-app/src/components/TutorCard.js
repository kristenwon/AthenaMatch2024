import React from 'react';

function TutorCard() {
  return (
   
        <div className="outer">
            <div className='outer1'>
                <div className='outer1_a'>
                    <img src="https://people.com/thmb/bPusbWRbciEGZBVhsDZ5UaN2Cug=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/michael-cera-021723-1-d1b41c08311a433e864dbb69714de386.jpg" style={{width:"100px",height:"auto"}} ></img>
                </div>
                <div>
                    {/* replace with backend name data tutor */}
                    Name
                </div>
            </div>
            <div className='outer2'>
                <div className='outer2_1'>
                    <div className='outer2_a'>
                        <div>Professor: Joe Trojan</div>
                        <div>Grade: A-</div>
                        <div>Fluent: English, Spanish</div>
                    </div>
                    <div className='outer2_b'>
                        <button>remote</button>
                        <button>hybrid</button>
                    </div>
                </div>
                <div>
                    This is where calendar should go
                </div>
            </div>
        </div>
   
  );
}

export default TutorCard;