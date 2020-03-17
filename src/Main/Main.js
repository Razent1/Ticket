import React from "react";
import InfoBlock from "../InformationBlock/InfoBlock";
import AllEvents from "../AllEvents";
import './Main.css'
import '../Header/styleHeader.css'
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {Redirect} from "react-router";
import LoginHeader from "../Header/LoginHeader";

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
                            {/*<AllEvents className='col-sm-9'/>*/}
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