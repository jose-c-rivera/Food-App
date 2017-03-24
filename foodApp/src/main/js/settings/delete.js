/**
 * File: delete.js
 * Purpose: Allows the user to delete their account
 * @AUTHOR: Yixin Li
 * Course: CS 2212
 */
import React from 'react'
import {Link} from 'react-router'

let Delete = React.createClass({

    getInitialState: function() {
        return {
        }
    },

      handleChange(e) {
        e.preventDefault();
      },

      handleSubmit(event) {
        alert('Your account has been deleted');
        event.preventDefault();
      },

   render(){
           return(
           <div><h1 id="settings_header">DELETE ACCOUNT</h1>
               <div id="entry_form">
                <form onSubmit={this.handleSubmit}>
                    <label>Are you sure you wish to delete your account?
                    </label>
                    <input type="submit" value="Delete" />
                </form>
               </div>
               <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class deleteAcc extends React.Component{
    render(){
        return(<Delete/>);
    }
}
