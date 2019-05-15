import React, { Component } from 'react';
import logo from './logo.png';
import axios from 'axios';

class Register extends Component {

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

    inscription = (e) => { e.preventDefault();
    axios.post('https://api.snapchat.wac.epitech.eu/inscription', this.state)
        .then( response => {
            console.log(response);
            this.props.history.push('/home');
        })
        .catch(function (error) {
            console.log(error);
        })
    }

    render() {
        return(
            <div className="App-header">
                <img className="App-logo" src={logo} alt="snoop dogy dog"/>
                <form onSubmit={ this.inscription }>
                    <label htmlFor="inscription">Inscription : </label><br/>
                    <input onChange={ this.checkMail } name="email" placeholder="Email" id="email" type="mail"/><br/>
                    <input onChange={ this.checkPass } name="password" placeholder="Password" id="password" type="password"/><br/>
                    <button type="submit">Register</button>
                </form>
            </div>)
    }
}

export default Register;