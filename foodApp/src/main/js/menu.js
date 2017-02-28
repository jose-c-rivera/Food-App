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
               <ul>
                   <li><Link to="/">LOG OUT</Link></li>
               </ul>
               <button id="Discover_button"><Link to="/discover" style={{display: 'block', height: '100%'}}></Link></button>
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