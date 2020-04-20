import React from "react";
import InfoBlock from "./InfoBlock";
import AllEvents from "./AllEvents";
import '../styles/Main.css'
import '../styles/styleHeader.css'
import Header from "../components/Header";
import LoginForm from "../components/LoginForm";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Redirect} from "react-router";
import LoginHeader from "../components/LoginHeader";

class Main extends React.Component {
    render() {
        if (this.props.checkLogin) {
            return (
                <Router>
                    <Redirect to='/events'/>
                    <div className='d-flex row'>
                        <div className='col-sm-3'>
                            col
                        </div>
                        <div className='col-sm-9'>
                            <Route path='/events' component={AllEvents}/>
                            {/*<Event className='col-sm-9'/>*/}
                        </div>
                    </div>
                </Router>
            )
        } else {
            return (
                <Router>
                    <div>
                        {/*<LoginForm/>*/}
                        <Header isLogin = {false} />
                        <Redirect to='/login'/>
                        <Route path='/login' component={LoginForm}/>
                    </div>
                </Router>
            )
        }
    }

}

export default Main;