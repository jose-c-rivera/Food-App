import React from 'react';

let CreateAcc = React.createClass({
    getInitialState (){
        return{
            userName : '',
            password : '',
            success : '',
            checked : this.checked || false
        }
    },

    handleUserChange (e){
        e.preventDefault();
        this.setState({userName : e.target.value});
    },

    handlePasswordChange (e)
    {
        e.preventDefault();
        this.setState({password : e.target.value});
    },

    handleSubmit(e){
        e.preventDefault();
        let userName = this.state.userName;
        let password = this.state.password;
        let termsOfService = this.state.checked;

        if(termsOfService) {
            fetch('http://localhost:8080/createAccount/create?'
                + 'userName=' + userName + '&password=' + password, {
                    method: 'POST',
                    headers: {
                        "Content-Type": "json"
                    }
                }
            ).then(res => {
                if (res.ok) {
                    this.setState({success: 'Account Created!!'});
                }
                else {
                    this.setState({
                        success: this.state.userName +
                        'Account name has already been taken..try again!'
                    });
                }
            })
        }
        else{
            alert("YOU MUST AGREE TO THE TERMS");
        }
    },

    handleClick(e){
        this.setState({checked: e.target.checked})
    },

    render (){
       return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        <input type = "text"
                               value={this.state.userName}
                               onChange={this.handleUserChange} />
                                Enter a username
                        <br/>
                        <input type = "text"
                               password = {true}
                               value = {this.state.password}
                               onChange = {this.handlePasswordChange} />
                                Enter a password
                    </label>
                    <br/>
                    <input type= "submit"
                    value="Create Account!" />
                    <input type = "checkbox"
                           checked = {this.state.checked}
                           onClick = {this.handleClick}/>
                    I agree to the terms of service
                </form>
            </div>
            )
        },
    });



export class CreateAccount extends React.Component{
    render(){
        return(<CreateAcc/>);
    }
}