import React from 'react';
import './App.css';
import './Login/style.css'
import './Header/styleHeader.css'
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import Header from "./Header/Header";
import Login from "./Login/Login";


class App extends React.Component {

    render() {
        return (
            <div>
                <Header/>
                <Login/>
                {/*<RegistrationForm/>*/}
            </div>
        )

    }
}

export default App;
