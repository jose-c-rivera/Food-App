import React from 'react'
import {Link} from 'react-router'

let Editpassword = React.createClass({

    getInitialState: function() {
        return {
            password: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({password: e.target.value});
      }

      handleSubmit(e) {
        alert('Your password is edited: ' + this.state.password);
        e.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.password} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class editpassword extends React.Component{
    render(){
        return(<Editpassword/>);
    }
}