import React from 'react';
import './App.css';
import './Login/styleLogin.css';
import './Header/styleHeader.css';
import './Main/Main.css';
import 'bootstrap/dist/css/bootstrap-grid.min.css';

import Header from "./Header/Header";
import Main from "./Main/Main";
import Login from "./Login/Login";


class App extends React.Component {

    render() {

        if (this.props.checkLogin) {
            return (

                <div>
                    <Main/>
                    {/*<Login/>*/}
                    {/*<RegistrationForm/>*/}
                </div>
            )
        } else{
                return (
                    <div>
                        {/*тут будет другой хэдэр*/}
                        <Header/>
                        <Login/>
                    </div>
                )
        }

    }
}

export default App;
