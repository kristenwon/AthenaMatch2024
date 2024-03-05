import React from 'react';
import '../components/PreLogin.css';
import boxGif from '../components/boxGif.gif';
import { db } from '../firebase';
import {collection, addDoc} from '@firebase/firestore';


function prelogin(){
    return(
        <div classesName="comps">
        
            <div className="logo"> <img src={boxGif} alt="Box GIF" /> </div>
                <div className="people">connecting people.</div>
                <div className="minds">connecting minds.</div>
                <div className="ideas">connecting ideas.</div>
                <div class="container"></div>

        <div className="log-in"> 

        <div className='signupmessage'>Sign up to match with a tutor!</div>
        
        <div className='name'>
            <label> First Name </label>
            <input type="text" id="firstname"/>

            <label> Last Name </label>
            <input type="text" id="lastname"/>
        </div>

        <div classname='uni'>
            <label> University</label>
            <input type="text" id="university"/>
        </div>

        <div className='idnum'>
            <label> ID</label>
            <input type="text" id="id"/>
            <br></br>
        </div>


        <button id="AddButton" onClick={()=>{
            //  event.preventDefault();
            //  const sleep = (delay) => new Promise((resolve) => setTimeout(resolve, delay));
            addDoc(collection(db, "students"), {
            
                firstname: document.getElementById('firstname').value,
                lastname: document.getElementById('lastname').value,
                id: document.getElementById('id').value,
                university: document.getElementById('university').value,
                contacts: document.getElementById('contacts').value
              }).then(response => {
                 alert("Done");
                 window.location.href = 'main.html';
             });
             
        }}>Sign Up</button>

    
    </div>
    </div>
    );
}

export default prelogin;