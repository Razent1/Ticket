import React from "react";
import {Link} from "react-router-dom";

class Navbar extends React.Component {

    logoutHandleClick = () => {
        localStorage.clear();
    }

    render() {
        return (
            <div className="col-sm-9">
                <nav className="navbar">
                    <a className="navbar-brand">Manager's Panel</a>
                    <form className="form-inline">
                        <input className="form-control mr-sm-1" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button onClick={this.logoutHandleClick} className="btn my-2 my-sm-2" type="submit">Logout
                        </button>
                    </form>
                </nav>
                <div className="col justify-content-center">
                    <Link to='/create_event'>
                        <button className='addEvent'>Add event</button>
                    </Link>
                    <Link to='/event_list'>
                        <button className='eventList'>Event list</button>
                    </Link>
                </div>
            </div>
        )
    }

}

export default Navbar;