/**
 * File: Menu.js
 * Purpose: Creates the main menu where the different components
 *          of our application can be accessed from
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'
import { NavBar } from './navbar'

let Menu = React.createClass({

    getInitialState(){
        return{}
    },

    /* The following renders button-links to each of the main components
     * of our application {Discover, Planner and Trending}
     */
    render(){
        return(
<div>
               < NavBar />
               <div id="containermenu">
               <div id="topBar">
                <h1 id="settings_header">WELCOME</h1>
               </div>
               <div id="childDiv3">
               <button id="Discover_button">
                   <Link to="/discover" style={{display: 'block', height: '100%'}}/>
               </button>
               </div>
               <div id="childDiv3">
               <button id="Planner_button">
                   <Link to="/planner" style={{display: 'block', height: '100%'}}/>
               </button>
               </div>
               <div id="childDiv3">
               <button id="Trending_button">
               </button>
               <div id="container">
               <div id="childDiv2">
               <button id="Profile_button">
                   <Link to="/profile" style={{display: 'block', height: '100%'}}/>
               </button>
               </div>
               <div id="childDiv2">
               <button id="Settings_button">
                   <Link to="/setting" style={{display: 'block', height: '100%'}}/>
               </button>
               </div>
               </div>
               </div>
               </div>
           </div>
        )
    },

});

//This exports the class to be imported by index.js
export class Menus extends React.Component{
    render(){
        return(<Menu/>);
    }
}