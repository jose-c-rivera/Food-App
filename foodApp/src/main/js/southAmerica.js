/**
 * Created by jose on 25/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let SouthAmerica = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}></Link></button>
                <h1>SOUTH AMERICA MAP PLACE-HOLDER</h1>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    },
});

export class southAmerica extends React.Component{
    render(){
        return(<SouthAmerica/>);
    }
}