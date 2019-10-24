import React from 'react';
import {Switch, Route} from 'react-router-dom';  //switch cycles through each, route is the route
import Meetups  from './Meetups';        //Bring in each component so we can route to it
import About from './About';
import MeetupDetails from "./MeetupDetails"
import AddMeetup from "./AddMeetup";
import EditMeetup from "./EditMeetup";

//describes the different routes to each "page"/Component 

const Main = () => {            //functional component not class based
    return (
        <div>
            <Switch>                                           
            <Route exact path= "/" component= {Meetups} />
            <Route exact path= "/about" component= {About} />
            <Route exact path= "/meetups/Add" component= {AddMeetup} />
            <Route exact path= "/meetups/Edit/:id" component= {EditMeetup} />            
            <Route exact path= "/meetups/:id" component= {MeetupDetails} />
                        </Switch>
        </div>
    )
}
//export main to app.js so it knows whats going on
export default Main; 


 //MAKE SURE THE :ID PATH IS LAST OTHERWISE EVERYTHING IS CONSIDERED AND "ID"