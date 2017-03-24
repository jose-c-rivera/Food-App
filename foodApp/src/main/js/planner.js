/**
 * File: planner.js
 * Purpose: Feature of our application that allows the user to plan
 *          an outing by adding friends to a party
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'
import { NavBar } from './navbar'

let Planner = React.createClass({

    getInitialState(){
        return{}
    },

    /*
     *The following renders options for the planning feature of our app
     * It lets the user choose between {Adding Friends, Find Restaurants and Group Vote}
     */
    render(){
        return(
            <div>
                < NavBar />
                <div id="containermenu">
                  <div id="topBar">
                  <button id="back">
                   <Link to="/menu" style={{display: 'block', height: '100%'}}/>
                   </button>
                   <h1 id="settings_header">PLANNER</h1>
                   </div>
                 <div id="childDiv3">
                    <button id="addFriends">
                    <Link to="/planner-SUB/addFriends" style={{display: 'block', height: '100%'}}/>
                    </button>
                </div>
                <div id="childDiv3">
                    <button id="findRestaurants">
                    <Link to="/planner-SUB/findRestaurant" style={{display: 'block', height: '100%'}}/>
                    </button>
                </div>
                <div id="childDiv3">
                    <button id="vote">
                    <Link to="/planner-SUB/groupVote" style={{display: 'block', height: '100%'}}/>
                    </button>
                </div>
            </div>
            </div>
        )
    },

});

//This exports the class to be imported by index.js
export class planner extends React.Component{
    render(){
        return(<Planner/>);
    }
}