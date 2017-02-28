import React from 'react'
import {Link} from 'react-router'

let Editphone = React.createClass({

    getInitialState: function() {
        return {
            phone: ''
        }
    },

      handleChange(e) {
        e.preventDefault();
        this.setState({phone: e.target.value});
      }

      handleSubmit(e) {
        alert('Your Phone Number is edited: ' + this.state.phone);
        e.preventDefault();
      }

   render(){
           return(
           <div>
                <form onSubmit={this.handleSubmit}>
                    <label>New Name
                    <input type="text" value={this.state.phone} onChange={this.handleChange} />
                    </label>
                    <input type="submit" value="Submit" />
                </form>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class editphone extends React.Component{
    render(){
        return(<Editphone/>);
    }
}