import React from 'react';
import './App.css';
import './Login/styleLogin.css'
import './Header/styleHeader.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Header from "./Header/Header";
import Login from "./Login/Login";
import RegistrationForm from "./RegistrationForm/RegistrationForm";


class App extends React.Component {

    render() {
        return (
            <div>
                {/*<Header/>*/}
                {/*<Login/>*/}
                <RegistrationForm/>
            </div>
        )

    }
}

export default App;
