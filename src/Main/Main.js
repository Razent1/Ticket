import React from "react";
import InfoBlock from "../InformationBlock/InfoBlock";
import AllEvents from "../AllEvents";
import './Main.css'
import '../Header/styleHeader.css'
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";

class Main extends React.Component {

    render() {
        if (this.props.checkLogin) {
            return (
                <div className='d-flex row'>
                    <div className='col-sm-3'>
                        col
                    </div>
                    <div className='col-sm-9'>
                        <AllEvents className='col-sm-9'/>
                    </div>
                </div>
            )
        } else {
            return (
                <Router>
                    <div>
                        <Header/>
                        {/*<LoginForm/>*/}
                        <Route path='/login' component={LoginForm}/>
                    </div>
                </Router>
            )
        }
    }

}

export default Main;