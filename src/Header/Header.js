import React from 'react';
import './styleHeader.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import logo from '../img/logo_white.svg';

class Header extends React.Component{

    render() {
        return(

            <header className="mainArray container-fluid">
                <div className="row">
                    <div className="logo col-sm-3">
                        <img className="logoImg w-100" src={logo} alt="logo"/>
                    </div>
                    <div className="col-sm-9">
                        <nav className="navbar">
                            <a className="navbar-brand">Manager's Panel</a>
                            <form className="form-inline">
                                <input className="form-control mr-sm-1" type="search" placeholder="Search"
                                       aria-label="Search"/>
                                    <button className="btn my-2 my-sm-2" type="submit">Logout</button>
                            </form>
                        </nav>
                        <div className="col justify-content-center">
                                <button className='addEvent'>Add event</button>
                                <button className='eventList'>Event list</button>
                        </div>

                    </div>
                </div>

            </header>

        )
    }

}

export default Header;