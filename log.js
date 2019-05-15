import React, { Component } from 'react';
import logo from './logo.png';
import axios from "axios";

class Log extends Component {

    constructor(props){
        super(props);
        this.state = {
            email : "",
            password : ""
        }
    }

    checkMail = (e)  => {this.setState({ email: e.target.value})
        console.log(this.state.email);
    };
    checkPass = (e)  => {this.setState({ password: e.target.value})
        console.log(this.state.password);
    };

    connexion = (e) => { e.preventDefault();
        axios.post('https://api.snapchat.wac.epitech.eu/connection', this.state)
            .then( response => {
                console.log(response);
                localStorage.setItem('Token', response.data.data.token);
                this.props.history.push('/');
                window.location.reload();
            })
            .catch(function (error) {
                console.log(error);
            })
    };
    render() {
        return(
            <div className="App-header">
                <img className="App-logo" src={logo} alt="snoop dogy dog"/>
                <form onSubmit={ this.connexion } method="POST">
                    <label htmlFor="login">Login : </label><br/>
                    <input onChange={ this.checkMail } name="email" placeholder="Email" id="email" type="mail"/><br/>
                    <label htmlFor="password">Password : </label><br/>
                    <input onChange={ this.checkPass } name="password" placeholder="Password" id="password" type="password"/><br/>
                    <button className="btn btn-danger" type="submit">Send</button>
                </form>
            </div>)
    }
}

export default Log;