/**
 * Created by jose on 02/03/17.
 */
import React from 'react'
import {Link} from 'react-router'

let GroupVote = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <h1 id="discover_header">(GROUP VOTE)</h1>
                <button id="back"><Link to="/planner" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },

});

export class groupVote extends React.Component{
    render(){
        return(<GroupVote/>);
    }
}