/**
 * File: trending.js
 * Purpose: Lets the user see all the restaurants that are trending on social media sites like Instagram and Twitter
 * @AUTHOR: Scott Lavelle
 * Course: CS 2212
 */

import React from 'react'
import {Link} from 'react-router'

let Trending = React.createClass({

    getInitialState(){
        return{}
    },

    /*This renders the screen showing trending restaurants.
     */
    render(){
        return(
            <div>
                <h1 id="discover_header">TRENDING</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <div></div>
                <li><Link to="/">LOG OUT</Link></li>
                <div id="info"><p> Trending restaurants:</p><p> {this.state.name}</p></div>
            </div>
                )
                },
                });


                export class TrendingApp extends React.Component{
                render(){
                return(<Trending/>);
            }
            }

