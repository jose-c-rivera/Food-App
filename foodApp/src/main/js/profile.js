/**
 * File: profile.js
 * Purpose: Renders a profile view to the user
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import { Link } from 'react-router';
import { NavBar } from './navbar'
import accountStore from './stores/accountStore'

let Profile = React.createClass({

    getInitialState(){

        let userName = accountStore.getUser();

        fetch('http://localhost:8080/viewAccount/view?' + 'userName=' + userName, {
                method: 'GET',
                dataType: 'json',
                headers: {
                    "accept": "application/json",
                    "Content-Type": "application/json"
                }
            }).then((response) => {
            return response.json();
        }).then((responseData) => {
            console.log(responseData.result.phoneNumber);
            console.log(responseData.result);
            this.setState({firstName: responseData.result.firstName});
            this.setState({lastName: responseData.result.lastName});
            this.setState({email: responseData.result.email});
            this.setState({location: responseData.result.location});
            this.setState({phoneNumber: responseData.result.phoneNumber});
            this.setState({tastes: responseData.result.tastes});
            this.setState({eventName: responseData.result.eventName})
        });

        return{
            userName:userName,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email,
            phoneNumber: this.phoneNumber,
            location: this.location,
            tastes: this.tastes,
            eventName: this.eventName
        }
    },


    //This renders the users profile to the view
    render (){
        return (
            <div>
                < NavBar />
                <h1 id="discover_header">PROFILE</h1>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <div id="profile_info">
                    <center><h1>Profile Info</h1></center>
                <h2>{this.state.userName}</h2>
                    <p><b>Username:</b> {this.state.userName}</p>
                    <p><b>First Name:</b> {this.state.firstName}</p>
                    <p><b>Last Name:</b> {this.state.lastName}</p>
                    <p><b>Location:</b> {this.state.location}</p>
                    <p><b>Email:</b> {this.state.email}</p>
                    <p><b>Phone:</b> {this.state.phoneNumber}</p>
                    <p><b>Tastes:</b> {this.state.tastes}</p>
                </div>
                <div id="upcoming_events">
                    <center><h1>Upcoming Events</h1></center>
                    <h2><b>Event Name:</b>{this.state.eventName}</h2>
                </div>
                <div id="friends_list">
                    <center><h1>Friends</h1></center>
                </div>
                <div id="fav_res">
                    <center><h1>Favourite Restaurants</h1></center>
                </div>
            </div>
        )
    }
});

//This exports the class to be imported by index.js
export class ProfileApp extends React.Component{
    render(){
        return(<Profile/>);
    }
}