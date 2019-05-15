import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './App.css';
import Nav from './form';
import Log from './component/log';
import Register from './component/register';
import Home from './component/home';
import Cam from './component/camera';
import Error from './component/error'


class App extends Component {
    render() {
        if (!localStorage.getItem('Token')){
            return (
                <BrowserRouter>
                    <Switch>
                    <Route path="/" component={ Nav } exact/>
                    <Route path="/log" component={ Log } exact/>
                    <Route path="/register" component={ Register } exact/>
                    <Route component={ Error }/>
                    </Switch>
                </BrowserRouter>

            )} else {
            return (
                <BrowserRouter>
                    <Switch>
                        <Route path="/" component={ Home } exact/>
                        <Route path="/cam" component={ Cam } exact/>
                        <Route component={ Error }/>
                    </Switch>
                </BrowserRouter>
            )
        }
}
}

export default App;
