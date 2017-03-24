/**
 * File: navbar.js
 * Purpose: Navigation bar to follow around the React pages
 * @AUTHOR: Ryan Kennedy
 * Course: CS 2212
 */
import React from 'react';
import Select from 'react-select';
import { Link, browserHistory } from 'react-router'


var NavigationBar = React.createClass({
    getInitialState(){
        return{
            windowWidth: window.innerWidth,
            mobileNavVisible: false
        }
    },

    handleResize() {
        this.setState({windowWidth: window.innerWidth});
    },

    componentDidMount() {
        window.addEventListener('resize', this.handleResize.bind(this));
    },

    componentWillUnmount() {
        window.removeEventListener('resize', this.handleResize.bind(this));
    },

    renderMobileNav() {
        if(this.state.mobileNavVisible) {
            return this.navigationLinks();
        }
    },

    handleNavClick() {
        if(!this.state.mobileNavVisible) {
            this.setState({mobileNavVisible: true});
        } else {
            this.setState({mobileNavVisible: false});
        }
    },
    // Got the list to not use bullet points
    navigationLinks() {
        return [
            <ul className="nav_list" type="none">
                <li key={1}><Link to="/discover">DISCOVER</Link></li>
                <li key={2}><Link to="/planner">PLANNER</Link></li>
                <li key={3}><Link to="/profile">PROFILE</Link></li>
                <li key={4}><Link to="/setting">SETTINGS</Link></li>
                <li key={5}><Link to="/">LOGOUT</Link></li>
            </ul>
        ];
    },

    renderNavigation() {
            return [
                <div>
                    <button id="nav_button" onClick={this.handleNavClick.bind(this)}/>
                    {this.renderMobileNav()}
                </div>
            ];
    },

    render(){
        return(
            <div className="nav_container">
                {this.renderNavigation()}
            </div>
        )
    }
});

//This exports the class to be imported by index.js
export class NavBar extends React.Component {
    render() {
        return (<NavigationBar/>);
    }
}