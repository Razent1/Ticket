import React from 'react';
import './Login/styleLogin.css';
import './Header/styleHeader.css';
import './App.css';
import './Main/Main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "./Header/Header";
import LoginForm from "./LoginForm/LoginForm";
import {Redirect, Switch} from 'react-router';
import {BrowserRouter as Router, Route} from "react-router-dom";
import AllEvents from "./AllEvents";
import Cal from "./Calendar/Calendar";
import LoginHeader from "./Header/LoginHeader";

class App extends React.Component {

    render() {

        if (this.props.checkLogin || localStorage.getItem('email')) {
            return (
                <Router>
                    <Redirect to='/events'/>
                    <Header/>
                    <div className='d-flex row'>
                        <div className='col-sm-3'>
                            <Cal/>
                        </div>
                        <div className='col-sm-9'>
                            <Switch>
                                {/*/!*<Provider store={store}>*!/ тут надо будет прописать main*/}
                                <Route path='/event_list'><AllEvents token={this.props.token} emaal={this.props.email}/></Route>
                                {/*</Provider>*/}
                            </Switch>

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
