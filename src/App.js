import React from 'react';
import './Login/styleLogin.css';
import './Header/styleHeader.css';
import './App.css';
import './Main/Main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "./Header/Header";
import Login from "./Login/Login";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Main from "./Main/Main";
import {Redirect} from 'react-router';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllEvents from "./AllEvents";


class App extends React.Component {

    render() {
        if (this.props.checkLogin) {
            return (
                <Router>
                    <div className='d-flex row'>
                        <div className='col-sm-3'>
                            col
                        </div>
                        <div className='col-sm-9'>
                            <Redirect to='/events' from='/login'/>
                            <Route path='/events' component={AllEvents}/>
                            {/*<AllEvents className='col-sm-9'/>*/}
                        </div>
                    </div>
                </Router>
            )
        } else {
            return (
                <Router>
                    <div>
                        <Header/>
                        <Redirect to='/login'/>
                        <Route path="/login" exact component={LoginForm}/>
                    </div>
                </Router>
            )
        }
    }
}

export default App;
