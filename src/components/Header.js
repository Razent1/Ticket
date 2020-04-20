import React, {useState} from 'react';
import '../styles/styleHeader.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import logo from '../img/logo_white.svg';
import App from "../App";
import LoginHeader from "./LoginHeader";
import Navbar from "../components/Navbar";

class Header extends React.Component {


    secondRender = () => {
        return (
            <header>
                <div className="row">
                    <div className="logo col-sm-3">
                        <a href="/events"> <img className="logoImg w-100" src={logo} alt="logo"/></a>
                    </div>
                    <Navbar/>
                </div>
            </header>
        )
    }


    render() {
        return this.secondRender();
    }
}

export default Header;