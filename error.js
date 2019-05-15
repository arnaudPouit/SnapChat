import React, { Component } from 'react';
import logo from './logo.png';

class Error extends Component {

    redirect = () => {
        this.props.history.push('/');
    }


    render() {
        return(

            <div className="App-header">
                <img className="App-logo" src={logo} alt="snoop dogy dog"/>
                <button class="btn btn-danger btn-lg" onClick={this.redirect}>La page que vous recherché n'existe pas <br/>
                Cliquer pour retourner a l'accueil</button>

            </div>)
    }
}

export default Error;