import React, { Component } from 'react'  
import axios from 'axios';              //Http client for making requests to the API
import MeetupItem from "./MeetupItem";  //Individual item component 

//Set the component level state to empty







class Meetups extends Component {
    constructor(){     //constructing state 
        super();       //"extends" component, calling the "component" components constructor
        this.state= {
            meetups: []
        }
    }
componentDidMount(){        //when the component "mounts" carry out the getMeetups function
    this.getMeetups();
}
    getMeetups(){   //a function to get the meetups from the back end server
        axios.get("http://localhost:3000/api/meetups") //using axios 
        .then (response => {                            //Axios returns a promise
             this.setState({meetups: response.data}, () => { //set the response data as the state
             }
             )}).catch(err => console.log (err)); //log errors if you cant
    }
    render() {          //sets what we actually show the user
        const meetupItems= this.state.meetups.map((meetup, i) => { //map through all the meetups in the state (returned from API by axios)
            return(
               <MeetupItem  key={meetup.id} item={meetup}/> //destructing and pulling out {id} from meetup (distint "key" is needed for react) and {meetup} (which is the whole object) and passing them as  "props" of Id and meetup to meetupItem component
            ) //"meetup" is what we passed into this function when we mapped through the state object
            //so we could get id and meetup to send them to the meetupItem component 
        })
        return (    //display "meetupItems" from above which is an array of meetup components built from whatever meetups are in the state
            <div>
                <h1>This is Meetups</h1>
                <ul className= "collection"> {meetupItems} </ul>  
            </div>
        )
    }
}

export default Meetups;
