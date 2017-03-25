/**
 * Created by jose on 02/03/17.
 */
import React from 'react'
import {Link, browserHistory} from 'react-router'
import AccountStore from "../stores/accountStore"

let FriendsAdd = React.createClass({

    getInitialState(){
        return{
                eventName: '',
        }
    },

    handleNameChange(e){
        e.preventDefault();
        this.setState({eventName: e.target.value})
    }
    ,



    handleSubmit(e){
        e.preventDefault();
        let name = AccountStore.getUser();
        let eventName = this.state.eventName;
        fetch('http://localhost:8080/Event/createEvent?userName=' + name + '&eventName=' + eventName,{
            method: 'POST',
            headers: {
                "Content-Type": "json"}
        }
        ).then(res => {
            if (res.ok) {
                alert("Success!");
                browserHistory.push('/planner-SUB/FindRestaurant');
            }
            else {
                alert("Failed. Sorry could not create event.");
            }
        })
        },


    render(){
        return(
            <div>
                <h1 id="discover_header">ADD FRIENDS</h1>
                <button id="back"><Link to="/planner" style={{display: 'block', height: '100%'}}/></button>

                <div id="center_form">
                    <form onSubmit={this.handleSubmit}>
                        <strong><b>Okay! So first things first! Let's name your event.</b></strong><br/><br/><br/>
                    <label>Event Name</label>
                    <div>
                        <input type = "text"
                               placeholder="Event name"
                               onChange = { this.handleNameChange } /><br/><br/>
                    </div>
                        <strong><b>Now lets add your friends. </b></strong><br/>
                        <label>Choose your friends to add to the party</label><br/>
                        <input type = "text"
                               placeholder="Friend's name"/><br/><br/>

                    <label>Choose your friends to add to the party</label>
                        <input type= "submit"
                               value="Next Step!" />
                </form>

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