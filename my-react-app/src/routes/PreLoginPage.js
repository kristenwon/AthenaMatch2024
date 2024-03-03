import React from 'react';
import '../components/PreLogin.css';
import boxGif from '../components/boxGif.gif';

function prelogin(){
    return(
        <div classesName="comps">
        
        <div className="logo"> <img src={boxGif} alt="Box GIF" /> </div>
            <div className="people">connecting people.</div>
            <div className="minds">connecting minds.</div>
            <div className="ideas">connecting ideas.</div>
            <div class="container"></div>

        <div class="login">
        <div class="name">
        First Name: 
        Last Name: 
        </div>
        <div class="uni">University:</div>
        <div class="contact">
        ID: 
        Email:
        </div>
        </div>
        </div>
    );
}

export default prelogin;