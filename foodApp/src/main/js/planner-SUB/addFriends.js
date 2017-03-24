/**
 * Created by jose on 02/03/17.
 */
import React from 'react'
import {Link} from 'react-router'
require('react-select/dist/react-select.css');

let FriendsAdd = React.createClass({

    getInitialState(){
        return{
            options : [
                { value: 'sweet', label: 'Sweet' },
                { value: 'spicy', label: 'Spicy' },
                { value: 'hot', label: 'Hot' },
                { value: 'sour', label: 'Sour' },
                { value: 'vegetarian', label: 'Vegetarian' },
                { value: 'vegan', label: 'Vegan' },
                { value: 'sweet', label: 'Sweet' }]
        }
    },

    handleFriendChange(e){
        e.preventDefault();
        this.setState({friends: e.target.value})
    }
    ,


    render(){
        return(
            <div>
                <h1 id="discover_header">ADD FRIENDS</h1>
                <button id="back"><Link to="/planner" style={{display: 'block', height: '100%'}}/></button>

                <div id="entry_form">
                    <form >
                        <strong><b>Okay! So first things first! Let's name your event.</b></strong><br/>
                    <label>Event Name</label>
                    <div>
                        <input type = "text"
                               placeholder="Event name"/>
                    </div>
                        <strong><b>Now lets add your friends. </b></strong><br/>
                        <input type = "text"
                               placeholder="Friend's name"/>

                    <label>Choose your friends to add to the party</label>
                </form>
                    <button>Continue</button>
                    <button>DELETE EVENT</button>
                </div>
            </div>
        )
    },

});

export class friendsAdd extends React.Component{
    render(){
        return(<FriendsAdd/>);
    }
}