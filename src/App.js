import React from 'react';
import './styles/styleLogin.css';
import './styles/styleHeader.css';
import './App.css';
import './styles/Main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "./components/Header";
import LoginForm from "./components/LoginForm";
import {Redirect, Switch} from 'react-router';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Cal from "./components/Calendar";
import LoginHeader from "./components/LoginHeader";
import AllEvents from "./components/AllEvents";
import NewEvent from "./NewEvent/NewEvent";


class App extends React.Component {

    render() {
        if (this.props.checkLogin || localStorage.getItem('email')) {
            return (
                <Router>
                    <Redirect to='/events'/>
                    <div className='header__wrapper'>
                        <Header/>
                    </div>
                    <div className='main'>
                        <div className='row'>
                            <div className='cal col-sm-3 '>
                                <div className='col'>
                                    <Cal/>
                                </div>
                            </div>
                            <div className='col-sm-9'>
                                <Switch>
                                    <Route path='/event_list'><AllEvents token={this.props.token}
                                                                         emaal={this.props.email}/></Route>
                                    <Route path='/create_event'> <NewEvent/></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </Router>
            )
        } else {
            return (
                <Router>
                    <div>
                        <Redirect to='/login'/>
                        <Route path="/login" exact component={LoginForm}/>
                    </div>
                </Router>
            )
        }
    }
}

export default App;
