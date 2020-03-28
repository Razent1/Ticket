import React from 'react';
import '../styles/styleHeader.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import logo from '../img/logo_white.svg';

class LoginHeader extends React.Component{

    render() {
        return(
            <header className="mainArray container-fluid">
                <div className="row">
                    <div className="logo col-sm-3">
                        <img className="logoImg w-100" src={logo} alt="logo"/>
                    </div>
                </div>
            </header>
        )
    }
}

export default LoginHeader;