import React from 'react';
import './Login/styleLogin.css';
import './Header/styleHeader.css';
import './Main/Main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "./Header/Header";
import Login from "./Login/Login";
import LoginForm from "./LoginForm/LoginForm";
import RegistrationForm from "./RegistrationForm/RegistrationForm";
import Main from "./Main/Main";


class App extends React.Component {

    render() {
        return (
            <Main/>
        )
    }
}

export default App;
