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
                <h1 id="discover_header">GROUP VOTE</h1>
                <button id="back"><Link to="/planner" style={{display: 'block', height: '100%'}}/></button>

                <div id="center_form">
                    <form >
                        <strong><b>Chances are you won't ALL agree on a restaurant.</b></strong><br/>
                        <strong><b>And that's fine so we'll pick for you! </b></strong><br/><br/><br/>
                    </form>
                </div>
            </div>
        )
    },

});

export class groupVote extends React.Component{
    render(){
        return(<GroupVote/>);
    }
}