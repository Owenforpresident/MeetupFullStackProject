import React, { Component } from 'react';
import {Link}from "react-router-dom"

class MeetupItem extends Component {
    constructor (props){
        super(props);
        this.state= { 
            item:props.item
        }
    }
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
