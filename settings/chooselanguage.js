import React from 'react'
import {Link} from 'react-router'

let Chooselanguage = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}></Link></button>
                <h1>Choose Your Language</h1>
                <br/>
                <select>
                  <option value ="english">English</option>
                  <option value ="frensh">Frensh</option>
                  <option value="other">Other</option>
                </select>
                <button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class chooselanguage extends React.Component{
    render(){
        return(<Chooselanguage/>);
    }
}