import React from 'react'
import {Link} from 'react-router'

let Delete = React.createClass({

    getInitialState: function() {
        return {
            new_name: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({new_name: e.target.value});
      }

      handleSubmit(event) {
        alert('A name was submitted: ' + this.state.new_name);
        event.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.new_name} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class delete extends React.Component{
    render(){
        return(<Delete/>);
    }
}