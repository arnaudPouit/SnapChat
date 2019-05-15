import React, { Component } from 'react';
import logo from './logo.png';


class Home extends Component {

logout = () => {
    localStorage.clear();
    this.props.history.push('/');
    window.location.reload();

};

    photo = () => {
        this.props.history.push('/cam');
    };

    render() {
        return(

            <div className="App-header">
                <img className="App-logo" src={logo} alt="snoop dogy dog"/>
                <h1>Rahhh Rah Raaaaah</h1>
                 <button className="btn btn-danger" onClick={ this.photo } type="submit">Appareil Photo</button>
                 <button className="btn btn-danger" onClick={ this.logout } type="submit">Deconnexion</button>
            </div>)
    }
}

export default Home;