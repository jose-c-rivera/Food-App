/**
 * File: australia.js
 * Purpose: Cuisine map for the Oceania region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom'



class Australia extends Component{

    /*This function creates our map according to the parameters
     *that are passed to it.
     */
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.display);
        jQuery(el).vectorMap({
            map: 'oceania_mill',
            backgroundColor: 'transparent',
            hoverColor: true,
            regionStyle: {
                initial: {
                    fill: '#245b87'
                },
                hover: {
                    fill: "#76c4ea"
                }
            }
        });
    }

    /*The following renders the div element that will hold
     *the map for the region once the function is called to create it.
     */
    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}/></button>
                <h1 id="discover_header">OCEANIA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
            </div>
        )
    }
}

//This exports the class to be imported by index.js
export class australia extends React.Component{
    render(){
        return(<Australia/>);
    }
}