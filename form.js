import React, { Component } from 'react';
import logo from './logo.png';
import { NavLink} from "react-router-dom";

class Nav extends Component {


    render() {
        return(

            <div className="App-header">
                {/*<div className="row">*/}
                {/*    <div className='col-md-6 col-md-offset-5"'>*/}

                        <h1>Snap Dog</h1>
                        <img className="App-logo " src={logo} alt="snoop dogy dog"/>
        {/*<div className='col-6'>*/}
                            <NavLink className='' to="/log"><button className=" btn btn-danger" type="submit">Connexion</button></NavLink>
                            <NavLink to="/register"><button className=" btn btn-danger" type="submit">Inscription</button></NavLink>
        {/*</div>*/}
        {/*            </div>*/}
        {/*        </div>*/}
            </div>)
    }
}

export default Nav;