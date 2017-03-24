/**
 * File: profile.js
 * Purpose: Renders a profile view to the user
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import { Link } from 'react-router';
import { NavBar } from './navbar'

let Profile = React.createClass({

    getInitialState(){
        return{}
    },


    //This renders the users profile to the view
    render (){
        return (
            <div>
                < NavBar />
                <h1 id="discover_header">PROFILE</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    }
});

//This exports the class to be imported by index.js
export class ProfileApp extends React.Component{
    render(){
        return(<Profile/>);
    }
}