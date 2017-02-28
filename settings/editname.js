import React from 'react'
import {Link} from 'react-router'

let Editname = React.createClass({

    getInitialState: function() {
        return {
            userName: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({userName: e.target.value});
      }

      handleSubmit(e) {
        alert('Your username is edited: ' + this.state.userName);
        e.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.userName} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class editname extends React.Component{
    render(){
        return(<Editname/>);
    }
}