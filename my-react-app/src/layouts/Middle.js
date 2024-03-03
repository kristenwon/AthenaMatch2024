import React from 'react';
import '../components/TutorCard.js';
import './Middle.css';
import TutorCard from '../components/TutorCard.js';
import likepng from '../components/like.png';
import dislikepng from '../components/dislike.png';

function Middle() {
  return (
    <div className="everything">
    <div className='tutorcard'>
            <TutorCard/>
        </div>
    <div className='swiping'>
        
        <button><img src={dislikepng} alt="dislike" /></button>
        <button><img src={likepng} alt="Like" /></button>
    </div>
    </div>
  );
}

export default Middle;