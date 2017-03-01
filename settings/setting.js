/**
 * Created by elaine on 25/02/17.
 */
import React from 'react'
import {Link} from 'react-router'

let Setting = React.createClass({

    getInitialState(){
        return{}
    },

    render(){
        return(
            <div>
                <button id="back"><Link to="/menu" style={{display: 'block', height: '100%'}}/></button>
                <br/>
                <button><Link to="/editname" style={{display: 'block', height: '100%'}}>Edit Name</Link></button>
                <br/>
                <button><Link to="/editpic" style={{display: 'block', height: '100%'}}>Edit Profile Picture</Link></button>
                <br/>
                <button><Link to="/editphone" style={{display: 'block', height: '100%'}}>Edit Phone Number</Link></button>
                <br/>
                <button><Link to="/edittastes" style={{display: 'block', height: '100%'}}>Edit Tastes</Link></button>
                <br/>
                <button><Link to="/managefriends" style={{display: 'block', height: '100%'}}>Manage Friends</Link></button>
                <br/>
                <button><Link to="/orderhistory" style={{display: 'block', height: '100%'}}>Order History</Link></button>
                <br/>
                <button><Link to="/editemail" style={{display: 'block', height: '100%'}}>Edit Email</Link></button>
                <br/>
                <button><Link to="/editlocation" style={{display: 'block', height: '100%'}}>Edit Location</Link></button>
                <br/>
                <button><Link to="/editpassword" style={{display: 'block', height: '100%'}}>Edit Password</Link></button>
                <br/>
                <button><Link to="/managefav" style={{display: 'block', height: '100%'}}>Manage Favourites</Link></button>
                <br/>
                <button><Link to="/chooselanguage" style={{display: 'block', height: '100%'}}>Choose Language</Link></button>
                <br/>
                <button><Link to="/delete" style={{display: 'block', height: '100%'}}>Delete Account</Link></button>
            </div>
        )
    },
});

export class SettingApp extends React.Component{
    render(){
        return(<Setting/>);
    }
}