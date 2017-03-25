/**
 * Created by jose on 02/03/17.
 */
import React from 'react'
import {Link} from 'react-router'

let FindRestaurant = React.createClass({

    getInitialState(){
        return{}
    },


    render(){
        return(
            <div>
                <h1 id="discover_header">RESTAURANT</h1>
                <button id="back"><Link to="/planner" style={{display: 'block', height: '100%'}}/></button>

                <div id="center_form">
                    <form >
                        <strong><b>Now its time to find a restaurant!</b></strong><br/><br/><br/>
                        <label>Search</label>
                        <div>
                            <input type = "text"
                                   placeholder="Event name"
                            /><br/><br/>
                        </div>
                    </form>

                </div>
            </div>
        )
    },

});

export class findRestaurant extends React.Component{
    render(){
        return(<FindRestaurant/>);
    }
}