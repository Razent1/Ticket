import React from "react";
import InfoBlock from "../InformationBlock/InfoBlock";
import AllEvents from "../AllEvents";
import './Main.css'
import '../Header/styleHeader.css'
import Header from "../Header/Header";
import LoginForm from "../LoginForm/LoginForm";

class Main extends React.Component {

    render() {
        if (this.props.checkLogin) {
            return (
                <div className='d-flex row'>
                    <div className='col-sm-3'>
                        col
                    </div>
                    <div className='col-sm-9'>
                        <AllEvents className='col-sm-9'/>
                    </div>
                </div>
            )
        } else {
            return (
                <div>
                    <Header/>
                    <LoginForm/>
                </div>
            )
        }
    }

}

export default Main;