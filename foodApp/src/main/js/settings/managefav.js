/**
 * Created by elaine on 26/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let Managefav = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <h1>Manage favourites</h1>
                <button id="back"><Link to="/setting" style={{display: 'block', height: '100%'}}/></button>
            </div>
        )
    },
});

export class managefav extends React.Component{
    render(){
        return(<Managefav/>);
    }
}