/**
 * File: editname.js
 * Purpose: Allows the user to edit their name
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'
import accountStore from '../stores/accountStore'

let Editname = React.createClass({

    getInitialState: function() {
        return {
            userName: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({userName: e.target.value});
      },

      handleSubmit(e) {
          e.preventDefault();
          alert('Your username has been set: ' + this.state.userName);
          // let userName = accountStore.getUser();
          // let newUserName = this.state.userName
          // fetch('http://localhost:8080/manageAccount/updateUserName?' + 'userName=' + userName + '&newUserName='
          //     + newUserName, {
          //     method: 'POST',
          //     headers: {}
          // });

      },

   render(){
           return(
           <div><h1 id="settings_header">EDIT NAME</h1>
                <form onSubmit={this.handleSubmit}>
                    <label>New UserName
                    <input type="text" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class editname extends React.Component{
    render(){
        return(<Editname/>);
    }
}