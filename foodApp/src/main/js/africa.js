import React from 'react'
import {Link} from 'react-router'

let Africa = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
                <h1 id="discover_header">/ AFRICA</h1>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    },
});

export class africa extends React.Component{
    render(){
        return(<Africa/>);
    }
}