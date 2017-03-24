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
               <button id="Discover_button">
                   <Link to="/Discover" style={{display: 'block', height: '100%'}}/>
               </button>
               <button id="Planner_button">
                   <Link to="/Planner" style={{display: 'block', height: '100%'}}/>
               </button>
               <button id="Trending_button">
                   <Link to="/Trending" style={{display: 'block', height: '100%'}}/>
               </button>
               <button id="Profile_button">
                   <Link to="/profile" style={{display: 'block', height: '100%'}}/>
               </button>
               <button id="Settings_button">
                   <Link to="/Setting" style={{display: 'block', height: '100%'}}/>
               </button>
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