/**
 * Created by jose on 25/02/17.
 */
import React, { Component } from 'react'
import {Link} from 'react-router'
import ReactDOM from 'react-dom';




class NorthAmerica extends Component{
    componentDidMount() {
        const el = ReactDOM.findDOMNode(this.display);
        jQuery(el).vectorMap({map: 'world_mill'});
    }


    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}/></button>
                <h1>NORTH AMERICA MAP PLACE-HOLDER</h1>
                <div ref={display => this.display = display} style={{width: '600px', height: '400px'}}/>

            </div>
        )
    }
}

export class northAmerica extends React.Component{
    render(){
        return(<NorthAmerica/>);
    }
}