import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Meetups  from './Meetups';
import About from './About';
import MeetupDetails from "./MeetupDetails"
import AddMeetup from "./AddMeetup";
import EditMeetup from "./EditMeetup";



const Main = () => {
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

export default Main; 
