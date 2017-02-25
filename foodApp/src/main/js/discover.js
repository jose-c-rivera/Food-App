import React from 'react'
import {Link} from 'react-router'

let Discover = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"></button>

                <li><Link to="/">LOG OUT</Link></li>
                <li><Link to="/menu">MAIN MENU</Link></li>
                <br/>
                <li><Link to="/NorthAmerica" >NORTH AMERICA</Link></li>
                <li><Link to="/SouthAmerica">SOUTH AMERICA</Link></li>
                <li><Link to="/Europe">EUROPE</Link></li>
                <li><Link to="/Asia">ASIA</Link></li>
                <li><Link to="/Africa">AFRICA</Link></li>
                <li><Link to="/Australia">OCEANIA</Link></li>

                <button id="nAmerica">NORTH AMERICA</button>
                <button id="sAmerica">SOUTH AMERICA</button>
                <button id="Europe">EUROPE</button>
                <button id="AsiaME">ASIA / MIDDLE EAST</button>
                <button id="Africa">AFRICA</button>
                <button id="Australia">AUSTRALIA</button>
            </div>
        )
    },
});

export class DiscoverApp extends React.Component{
    render(){
        return(<Discover/>);
    }
}