import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"; 

class AddMeetup extends Component {

    addMeetup(newMeetup){  //A function which adds a new meetupt to the back end with "newmeetup" object created below passed in
        axios.request({  //using axios to make a post request
            method: "post",
            url: "http://localhost:3000/api/meetups", //to the meetups endpoint of the API
            data: newMeetup,                           //sending the newmeetup (created below) object along
        }).then(response => {                           //returns a promise
            this.props.history.push("/");               //send user back to "Homepage", router has "history"
        }).catch(err => console.log(err));              //log errors
    }
   
    onSubmit(e){  //naming the function with event parameter passed in
        const newMeetup= {                  //constructing a new meetup object
            name:this.refs.name.value,      //assinging the input with ref name as the "name" in our object
            city:this.refs.city.value,
            address:this.refs.address.value,

        }
        this.addMeetup(newMeetup);
        e.preventDefault();  //stops the page from reloading??
    }



    //render the form
    //go back link (button) to hompage "/""
    //heading add meetups
    //onSumbit (comes from the form) when clicked calls onSubmit function (written by me)
    //binding this so "this.etc" can be used in the onSubmit function
    //labeling the inputs and styling
    //ref allows us to use the value when its submitted
    //submit button labeled save
   
    render() {
        return (
            <div>
                  <Link className= "btn" to= "/"> Go Back</Link>  
                <h1>AddMeetup</h1>
                <form onSubmit={this.onSubmit.bind((this))}>
                    <div className = "input- field"> 
                    <input type= "text" name= "name" ref ="name"/>
                    <label htmlFor="name">Name</label>
                    </div>
                    <div className = "input- field"> 
                    <input type= "text" name= "city" ref ="city"/>
                    <label htmlFor="city">City</label>
                    </div>
                    <div className = "input- field"> 
                    <input type= "text" name= "address" ref ="address"/>
                    <label htmlFor="city">Address</label>
                    </div>
                    <input type="submit" value= "save" className= "btn"/>
                </form>
            </div>
        )
    }
}

export default AddMeetup