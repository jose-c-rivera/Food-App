/**
 * File: editemail.js
 * Purpose: Allows the user to modify the registered email
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'
import accountStore from '../stores/accountStore'

let Editemail = React.createClass({

    getInitialState: function() {
        return {
            email: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({email: e.target.value});
      },

      handleSubmit(e) {
        alert('Your email has been updated: ' + this.state.email);
          let userName = accountStore.getUser();
          let newEmail = this.state.email;
          fetch('http://localhost:8080/manageAccount/updateEmail?' + 'userName=' + userName + '&newEmail='
              + newEmail, {
              method: 'POST',
              headers: {}
          });

      },

   render(){
           return(
           <div><h1 id="settings_header">EDIT EMAIL</h1>
               <div id="entry_form">
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Update</Link></button>
                </form>
               </div>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editemail extends React.Component{
    render(){
        return(<Editemail/>);
    }
}