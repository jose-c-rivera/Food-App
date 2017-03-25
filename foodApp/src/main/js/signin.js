/**
 * File: signin.js
 * Purpose: First view that allows the user to Log-In to our application with their
 *          stored credentials, or create a new account if they don't have one
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import { Link, browserHistory } from 'react-router'
import AccountStore from "./stores/accountStore"

let SignIn = React.createClass({
    getInitialState(){
        return{
            userName: '',
            password: '',
            authenticated: ''
        }
    },

    handleUserChange (e){
        e.preventDefault();
        this.setState({userName: e.target.value});
    },

    handlePasswordChange (e)
    {
        e.preventDefault();
        this.setState({password: e.target.value});
    },

    handleSubmit(e){
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;
        AccountStore.changeUser(userName);
        fetch('http://localhost:8080/signin/signinUser?'
            + 'userName=' + userName + '&password=' + password, {
                method: 'GET',
                headers: {
                    "Content-Type": "json"
                }
            }
        ).then(res => {
            if (res.ok) {
                this.setState({authenticated: true})
                browserHistory.push('/menu')
            }
            else {
                alert('pw or username error...');
                this.setState({authenticated: false})
            }
        })
    },

    /*The following render inputs the specified elements into
     *the parent HTML page when we visit this view.
     */
    render (){
        return (
            <div className="signin">
                <h1 id="title_header">TRAVEL BITES</h1>
                <Link to="/menu" style={{display: 'block', height: '100%'}}>TEMP SIGN IN</Link>
                <div id="center_form">
                    <h1>SIGN IN</h1>
                    <hr/><br/>
                <form onSubmit={this.handleSubmit}>
                    <label>Enter your username</label>
                    <div>
                        <input type="text"
                           placeholder="Username"
                           onChange={this.handleUserChange}/>
                    </div><br/><br/>
                    <label>Enter your password</label>
                    <div>
                    <input type="password"
                           placeholder="Password"
                           onChange={this.handlePasswordChange}/>
                    </div><br/><br/>
                    <input type="submit"
                           value="Sign In"/>
                </form><br/>
                <label>Don't have an account?
                    <Link to="/createaccount" style={{display: 'block', height: '80%'}}>Create One!</Link>
                </label>
                </div>
            </div>
        )
    }
});

//This exports the class to be imported by index.js
export class UserSignIn extends React.Component{
    render(){
        return(<SignIn/>);
    }
}