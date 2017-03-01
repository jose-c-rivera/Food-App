/**
 * Created by elaine on 26/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let Managefriends = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}></Link></button>
                <h1>Manage Friends</h1>
                <<button><Link to="/setting" style={{display: 'block', height: '100%'}}>Back to Setting</Link></button>
            </div>
        )
    },
});

export class managefriends extends React.Component{
    render(){
        return(<Managefriends/>);
    }
}