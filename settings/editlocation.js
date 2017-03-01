import React from 'react'
import {Link} from 'react-router'

let Editlocation = React.createClass({

    getInitialState: function() {
        return {
            location: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({location: e.target.value});
      }

      handleSubmit(e) {
        alert('Your Location is edited: ' + this.state.location);
        e.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.location} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class editlocation extends React.Component{
    render(){
        return(<Editlocation/>);
    }
}