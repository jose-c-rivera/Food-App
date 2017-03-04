/**
 * File: southAmerica.js
 * Purpose: Cuisine map for the European region
 * @AUTHOR: Jose Rivera
 * Course: CS 2212
 */
import React, {Component} from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';

class SouthAmerica extends Component{

    /*This function creates our map according to the parameters
     *that are passed to it.
     */
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.display);
        jQuery(el).vectorMap({
            map: 'south_america_mill',
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

    /*The following render hold the div element that will hold
     *the map for the region once the function is called to create it.
     */
    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">SOUTH AMERICA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '1000px', height: '700px'}}/>
            </div>
        )
    }
}

//This exports the class to be imported by index.js
export class southAmerica extends React.Component{
    render(){
        return(<SouthAmerica/>);
    }
}