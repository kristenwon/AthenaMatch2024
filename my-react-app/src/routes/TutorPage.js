import React, {useState} from "react";
import Header from "../layouts/Header";
import SideNav from "../layouts/SideNav";
import "../components/tutorPage.css";
import Middle from "../layouts/Middle";

const TutorPage = () => {

    return (
      <div className="comps">
        
        <SideNav/>
        <div className="rightside">
        <Header/>
        <Middle/>
        </div>
      </div>
    );
    
}

export default TutorPage;