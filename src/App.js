import React from 'react';
import './App.css';
import './Login/styleLogin.css';
import './Header/styleHeader.css';
import './Main/Main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "./Header/Header";
import Login from "./Login/Login";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


class App extends React.Component {

    render() {

        if (this.props.checkLogin) {
            return (
                <div>
                    {/*<Main/>*/}
                    {/*<Login/>*/}

                    {/*<LoginForm/>*/}
                </div>
            )
        } else {
            return (
                <div>
                    <Header/>
                    <LoginForm/>
                    {/*тут будет другой хэдэр*/}
                    {/*<RegistrationForm/>*/}
                    {/*<Header/>*/}
                    {/*<div className='login d-flex p-5'>*/}
                    {/*    <Login/>*/}
                    {/*</div>*/}
                </div>
            )
        }

    }
}

export default App;
