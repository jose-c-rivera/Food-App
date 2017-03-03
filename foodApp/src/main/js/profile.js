/**
 * Created by Fate on 2/28/2017.
 */
import React from 'react';
import { Link } from 'react-router'

var viewProfile = React.createClass({

    render (){
        return (
            <div className="profile">
                Hi a profile goes here
            </div>
        )
    }
});

export class Profile extends React.Component{
    render(){
        return(<viewProfile/>);
    }
}