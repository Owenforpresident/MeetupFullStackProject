import React, { Component } from 'react';
import {Link}from "react-router-dom"

class MeetupItem extends Component {
    constructor (props){        //props are coming from the meetups component
        super(props);           //We passed them in instead of axiosing them again here and so that both components "agree"
        this.state= { 
            item:props.item     //item is the name we picked, we assigned it to the "meetup" variable from mapping through state in the meetups component
        }
    }

    //the individual item is found by going to /this.state.item.id
    //display the name of the item which is just this.state.item.name
    render() {
        return (
            <div>
                <li className= "collection-item"> 
               <Link to= {`/meetups/${this.state.item.id}`}>{this.state.item.name}</Link> 
               </li>
            </div>
        )
    }
}

export default MeetupItem
