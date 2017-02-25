/**
 * Created by jose on 25/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let NorthAmerica = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <h1>NORTH AMERICA MAP PLACE-HOLDER</h1>
                <li><Link to="/discover">DISCOVER</Link></li>
            </div>
        )
    },
});

export class northAmerica extends React.Component{
    render(){
        return(<NorthAmerica/>);
    }
}