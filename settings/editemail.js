import React from 'react'
import {Link} from 'react-router'

let Editemail = React.createClass({

    getInitialState: function() {
        return {
            email: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({email: e.target.value});
      }

      handleSubmit(e) {
        alert('Your Email is edited: ' + this.state.email);
        e.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.email} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class editemail extends React.Component{
    render(){
        return(<Editemail/>);
    }
}