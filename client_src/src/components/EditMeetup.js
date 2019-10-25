import React, { Component } from 'react';
import axios from "axios";
import {Link} from "react-router-dom"; 

class EditMeetup extends Component {
    constructor(props){ //constructing state 
        super(props);
        this.state= {
            id: "",
            name: "",
            city: "",
            address: "", 
        }
        this.handleInputChange = this.handleInputChange.bind(this) //tidier in this case to bind here instead of in the render, * more efficient??
    }
    componentDidMount(){
        this.getMeetupDetails(); //call the GetMeetup details fucntion automatically when the page loads
    }
    getMeetupDetails(){
        let meetupId= this.props.match.params.id;  //getting the ID from params / URL
            axios.get(`http://localhost:3000/api/meetups/${meetupId}`) //getting that meetup from the api
            .then (response => {  //then set the component state to the response
                this.setState({
                    id: response.data.id,
                    name: response.data.name,
                    city: response.data.city,
                    address: response.data.address,
                }, () => {
                    console.log(this.state)
                });
            }) 
            .catch(err => console.log(err))
    };
    editMeetup(newMeetup){    //this is basically the same as the addmeetup fucntion from that component
        axios.request({
            method: "put",
            url: `http://localhost:3000/api/meetups/${this.state.id}`,
            data: newMeetup,
        }).then(response => {
            this.props.history.push("/");
        }).catch(err => console.log(err));
    }
   
    onSubmit(e){
        const newMeetup = 
           {name: this.refs.name.value,
            city: this.refs.city.value,
            address: this.refs.address.value } 
    this.editMeetup(newMeetup);
    e.preventDefault();
    }
    handleInputChange(e) {      //sets the "targets" of the form as the state variables
        const target= e.target; //setting target as e.target instead of using e.target.name
        const value= target.value;  //instead of saying e.target.value
        const name= target.name;  //instead of saying e.target.name, sets name as the targeted value of the form
this.setState({     //"updates" the state using the value which is in the input that  is clicked
    [name]: value 
});
    }


    //render is the same as addmeetup except
    //the value is set to the this.state.specific thing were editing with that field
    //this is because that is in the state now from the above
    //loads these values so people can see when they edit
    //the gotcha is the fact they need an input handler or react UI wont let you edit
    //this is why "handle input change" function exists (as well as the actual functionality)
    render(){ 
        return (
            <div>
                  <Link className= "btn" to= "/"> Go Back</Link>
                <h1>Edit Meetup</h1>
                <form onSubmit={this.onSubmit.bind((this))}>
                    <div className = "input- field"> 
                    <input type= "text" name= "name" ref ="name"  value={this.state.name}
                    onChange= {this.handleInputChange}/>
                    <label htmlFor="name">Name</label>
                    </div>
                    <div className = "input- field"> 
                    <input type= "text" name= "city" ref ="city" value={this.state.city} 
                    onChange= {this.handleInputChange}/>
                    <label htmlFor="city">City</label>
                    </div>
                    <div className = "input- field"> 
                    <input type= "text" name= "address" ref ="address" value={this.state.address} 
                    onChange= {this.handleInputChange}/>
                    <label htmlFor="city">Address</label>
                    </div>
                    <input type="submit" value= "save" className= "btn"/>
                </form>
            </div>
        )
    } 
}


export default EditMeetup;