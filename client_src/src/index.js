import React from 'react';
import ReactDOM from 'react-dom'; //this is necessary for the browser router to be usefull 
import {BrowserRouter} from "react-router-dom"; //This is what lets us use the router without going to the server everytime
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <BrowserRouter> <App /> </BrowserRouter>, //app component needs to wrapped in the browsers router 
document.getElementById('root'));              //component in order to work
serviceWorker.unregister();                     //PWA stuff not relevant for now
