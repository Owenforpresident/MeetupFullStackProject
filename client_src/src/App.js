import React from 'react';
import './App.css';
import Main from "./components/Main";   //brings in the different routes from the "main" component
import Navbar from "./components/Navbar"
import {Link} from "react-router-dom"   //Allows us to link to different endpoints, better than href for "internal" links (not outside the app)
//the navbar component from materilize 
//with the main component underneath, this shows the meetups because the "/" route "homepage"
//is really just the Meetups component (which itself uses axios to make a get req and show everything)
//Then just a Link (that serves as a button) which allows users to add a meetup

const App= () => {
  return (
    <div>
      <Navbar/>
      <div className= "container">
     <Main/>
     </div>
     <div className= "fixed-action-btn">
       <Link to = "/meetups/add" className= "btn-floating btn-large red"> 
       <i className="fa fa-plus"></i>
       </Link>
     </div>
    </div>
  );
}

export default App;
