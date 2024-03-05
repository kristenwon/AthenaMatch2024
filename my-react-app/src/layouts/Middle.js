import React from 'react';
import '../components/TutorCard.js';
import './Middle.css';
import TutorCard from '../components/TutorCard.js';
import YesButton from '../components/YesButton.js';
import NoButton from '../components/NoButton.js';

function Middle({tutorsList, tt}) {
  return (
    <div className='swiping'>
        <NoButton/>
        <div className='tutorcard'>
            <TutorCard tutorsList={tutorsList} tt={tt} />
        </div>
        <YesButton/>
    </div>
  );
}

export default Middle;