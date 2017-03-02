/**
 * Created by jose on 25/02/17.
 */
import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';




class NorthAmerica extends Component{
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.display);
        jQuery(el).vectorMap({map: 'north_america_mill', backgroundColor: 'transparent'});
    }


    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}/></button>
                <h1 id="discover_header">/ NORTH AMERICA</h1>
                <div id="map" ref={display => this.display = display} style={{width: '600px', height: '400px'}}/>
            </div>
        )
    }
}

export class northAmerica extends React.Component{
    render(){
        return(<NorthAmerica/>);
    }
}