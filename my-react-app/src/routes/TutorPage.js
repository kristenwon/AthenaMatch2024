import React, { useState, useEffect } from "react";
import Header from "../layouts/Header";
import SideNav from "../layouts/SideNav";
import "../components/tutorPage.css";
import Middle from "../layouts/Middle";
import { db } from '../firebase';
import { collection, getDocs, where, query } from '@firebase/firestore';

const documents=await getDocs(collection(db, "tutors"))
const TutorPage = () => {
  const [tutorsList, setTutorsList] = useState([]);
  const [tt, setTt] = useState(0);

  useEffect(() => {
    const fetchTutors = async () => {
      const q = query(collection(db, "tutors"), where("courses", "array-contains-any", ["CSCI 104"]));
      const querySnapshot = await getDocs(q);
      const tutorsData = querySnapshot.docs.map(doc => doc.data());
      setTutorsList(tutorsData);
    };

    fetchTutors();
  }, []);

  const handleNoButtonClick = () => {
    let newTt = tt + 1;

    if (newTt === tutorsList.length) {
      alert("No more available tutors. Will refresh!");
      newTt = 0;
    }

    setTt(newTt);
  };

  const handleYesButtonClick = () => {
    const b1 = document.getElementById("buttonsDiv");
    b1.style.display = "none";

    const b2 = document.getElementById("confirmButtonDiv");
    b2.style.display = "block";

    alert(`You matched with ${tutorsList[tt].name}!`);
  };

  const handleConfirmButtonClick = () => {
    alert("Congrats!");
    // const selectedAvailability = document.querySelector("input[name='availability']:checked").value;
    // const selectedEnvironment = document.querySelector("input[name='environment']:checked").value;
    // const selectedFluent = document.querySelector("input[name='fluent']:checked").value;

    // alert(`Details: ${tutorsList[0].name}, ${selectedAvailability}, ${selectedEnvironment}, ${selectedFluent}`);
  };

    return (
      <div className="leftside">
        <SideNav />
        <div className="rightside">
          <Header />
          <Middle tutorsList={tutorsList} tt={tt} />
          <div
            style={{
              position: "absolute",
              bottom: 50,
              right: 50,
            }}
          >
            
            <div id="buttonsDiv">
              <button id="yesButton" onClick={handleYesButtonClick}>
                Yes
              </button>
              <button id="noButton" onClick={handleNoButtonClick}>
                No
              </button>
            </div>
            <div id="confirmButtonDiv" style={{ display: "none" }}>
              <button id="confirm_button" onClick={handleConfirmButtonClick}>
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    );
    
}


export default TutorPage;

