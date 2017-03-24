/**
 * File: orderhistory.js
 * Purpose: Allows the user to see/delete their order history
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Orderhistory = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div><h1 id="settings_header">HISTORY</h1>
                <div id="entry_form">
                </div>
                <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class orderhistory extends React.Component{
    render(){
        return(<Orderhistory/>);
    }
}