/**
 * Created by jose on 02/03/17.
 */
import React from 'react'
import {Link} from 'react-router'

let FindRestaurant = React.createClass({

    getInitialState(){
        return{}
    },

    handleClick(e){
        e.preventDefault;
        fetch('http://localhost8080/Search/searchRestaurants?' +
            'searchTerm=tacos&location=London,ON', {
            method : 'GET',
            headers : {
                "Content-Type": 'String'
            }
        }).then(response => {
            console.log('request made');
            alert(response);
        })
    },

    render(){
        return(
            <div>
                <h1 id="discover_header">(RESTAURANT)</h1>
                <button id="back"><Link to="/planner" style={{display: 'block', height: '100%'}}/></button>
                <button onClick={this.handleClick}>SEARCH</button>
            </div>
        )
    },

});

export class findRestaurant extends React.Component{
    render(){
        return(<FindRestaurant/>);
    }
}