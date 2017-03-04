/**
 * File: managefriends.js
 * Purpose: Allows the user to add/remove friends
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Managefriends = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div><h1 id="settings_header">FRIENDS</h1>
                <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class managefriends extends React.Component{
    render(){
        return(<Managefriends/>);
    }
}