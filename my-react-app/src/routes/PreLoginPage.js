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
                <div className='signupmessage'>Sign up to match with a tutor!</div>
                <div class="name">
                    <input type="text" placeholder='First Name'></input>
                    <input type="text" placeholder='Last Name'></input>
                </div>
                <div class="uni">
                <input type="text" placeholder='University'></input>
                </div>
                <div class="contact">
                <input type="text" placeholder='ID'></input> 
                <input type="text" placeholder='Email'></input>
                </div>
                <div className='signup'>
                    <button>Sign up</button>
                </div>
            </div>
        </div>
    );
}

export default prelogin;