import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"; 

class MeetupDetails extends Component {
    constructor (props) {
        super(props);  //constructing state
        this.state = {
            details:"" //setting it as empty 
        }
    }
    componentDidMount(){
        this.getMeetup();  // same as the meetups component 
    }
    getMeetup(){ //function to get an individual meetup
        let meetupId= this.props.match.params.id; //this is from using the react router "params" is available form the router URL endpoint 
            axios.get(`http://localhost:3000/api/meetups/${meetupId}`) //get the specific meetup with this id
            .then (response => {
                 this.setState({details: response.data}, () => { //set the component level state as the response and call it details
                 }
                 )}).catch(err => console.log (err)); //checking errors
    }
    onDelete(){ //function for deleting an indivdual meetup
        let meetupId= this.state.details.id; //coming from the state which is set by the get meetup function
        axios.delete(`http://localhost:3000/api/meetups/${meetupId}`) //sends a delete request to the specific meetup in the api 
        .then(response => {  //returns a promise
            this.props.history.push("/"); //send the user back to the "/"(homepage) history is available from router
        }).catch(err=> console.log (err));  //checking errors
    }
//displays
//heading with the name from state.details.name
//list with indivudal list items displaying the city and address for the specific
//meetup which is "asked for"

//edit
//link (button) to the editMeetup component
//When the delete button is clicked call the onDelete function and send along "this" meaning the 
//object, using bind(), could use es6 arrow function, or bind in the class constructor 

    render() {      //what we are showing
        return (
            <div>
                <Link className= "btn" to= "/"> Go Back</Link>
               <h1>{this.state.details.name}</h1> 
               <ul className= "collection">
                   <li className= "collection-item"> City: {this.state.details.city}</li>
                   <li className= "collection-item"> Address: {this.state.details.address}</li>

                   </ul>
                   <Link className= "btn" to= {`/meetups/edit/${this.state.details.id}`}>Edit</Link>
           <button onClick= {this.onDelete.bind(this)}className="btn red right">Delete</button>
            </div>
        )
    }
}

export default MeetupDetails
