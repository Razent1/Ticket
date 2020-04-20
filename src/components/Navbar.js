import React from "react";
import {Link} from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faPlus, faList} from "@fortawesome/free-solid-svg-icons";

const addIcon = <FontAwesomeIcon icon={faPlus}/>;
const listIcon = <FontAwesomeIcon icon={faList}/>;

class Navbar extends React.Component {


    logoutHandleClick = () => {
        localStorage.clear();
    };

    render() {
        return (
            <div className="col-sm-9">
                <nav className="navbar">
                    <a className="navbar-brand"
                       style={{fontFamily: 'DINPro-Regular', color: "gray", fontWeight: 'bold'}}>Manager's Panel</a>
                    <form className="form-inline">
                        <input className="form-control" type="search" placeholder="Search"
                               aria-label="Search"/>
                        <button onClick={this.logoutHandleClick} className="btn my-2 my-sm-2" type="submit"
                                style={{fontFamily: 'DINPro-Regular', color: "gray", fontWeight: 'bold'}}>Logout
                        </button>
                    </form>
                </nav>
                <div className="col-sm justify-content-center" style={{fontFamily: 'DINPro-Regular', color: "gray"}}>
                    <Link to='/create_event'>
                        <button className='addEvent' style={{color: "#231f20", fontWeight: 'bold'}}>{addIcon} Add
                            event
                        </button>
                    </Link>
                    <Link to='/event_list'>
                        <button className='eventList' style={{color: "#231f20", fontWeight: 'bold'}}>{listIcon} Event
                            list
                        </button>
                    </Link>
                </div>
            </div>
        )
    }
}

export default Navbar;