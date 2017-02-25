/**
 * Created by jose on 22/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let Menu = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
           <div>
               <button id="Discover_button"></button>
               <ul>
                   <li><Link to="/">LOG OUT</Link></li>
                   <li><Link to="/discover">DISCOVER</Link></li>
               </ul>
               <button id="Planner_button"></button>
               <button id="Trending_button"></button>
               <button id="Profile_button"></button>
               <button id="Settings_button"></button>
           </div>
        )
    },

});

export class Menus extends React.Component{
    render(){
        return(<Menu/>);
    }
}