/**
 * Created by jose on 25/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let Europe = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">/ EUROPE</h1>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    },
});

export class europe extends React.Component{
    render(){
        return(<Europe/>);
    }
}