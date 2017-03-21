/**
 * File: discover.js
 * Purpose: Allows the user to pick from a continental map,
 *          then they will be presented a map to choose cuisine from
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'
import { NavBar } from './navbar'

let Discover = React.createClass({

    getInitialState(){
        return{}
    },

    /*The following render provides the user several buttons to the different
     *regions of the world. Once they make a selection they will be taken to
     * a map of the region.
     */
    render(){
        return(
            <div>
                < NavBar />
                <h1 id="discover_header">DISCOVER</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <button id="nAmerica"><Link to="/NorthAmerica" style={{display: 'block', height: '100%'}}/></button>
                <button id="sAmerica"><Link to="/SouthAmerica" style={{display: 'block', height: '100%'}}/></button>
                <button id="Europe"><Link to="/Europe" style={{display: 'block', height: '100%'}}/></button>
                <button id="AsiaME"><Link to="/Asia" style={{display: 'block', height: '100%'}}/></button>
                <button id="Africa"><Link to="/Africa" style={{display: 'block', height: '100%'}}/></button>
                <button id="Australia"><Link to="/Australia" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

//This exports the class to be imported by index.js
export class DiscoverApp extends React.Component{
    render(){
        return(<Discover/>);
    }
}