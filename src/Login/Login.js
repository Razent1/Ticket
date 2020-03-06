import React from "react";
import AllEvents from "../AllEvents";
import InfoBlock from "../InformationBlock/InfoBlock";
import RegistrationForm from "../RegistrationForm/RegistrationForm";

class Login extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            checkLogin: true,
            checkEmail: false,
            checkPassword: false,
            inputEmail: '',
            inputPassword: ''
        };
        this.handleChangePassword = this.handleChangePassword.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.getAdminInformation = this.getAdminInformation.bind(this);
        this.emailValidation = this.emailValidation.bind(this);
    }

    handleChangeEmail = (event) => {
        this.setState({inputEmail: event.target.value});
        this.emailValidation(this.state.inputEmail);

    }

    handleChangePassword = (event) => {
        this.setState({inputPassword: event.target.value});
    }

    getAdminInformation = (event) => {
        let email = event.target.inputEmail.value;
        let password = event.target.inputPassword.value;
    }

    emailValidation = (email) => {
        let indexOfDote = email.length - 1 - email.lastIndexOf('.') - 1;
        let indexOfAt = email.lastIndexOf('.') - 1 - email.lastIndexOf('@');
        if (email.includes('@') && email.includes('.') && indexOfDote >= 2 && indexOfAt >= 1) {
            console.log(indexOfAt);
            this.setState({checkEmail: true});
        } else {
            this.setState({checkEmail: false});
        }
    }

    setLogin = () => {
        if (this.state.checkEmail === true && this.state.checkPassword === true) {
            this.setState({checkLogin: true});
        }
    }
    renderFalse = () => {
        return (
            <div className="container">
                <form onSubmit={this.getAdminInformation}>
                    <div className="form-group row justify-content-center">
                        <div className="col-sm-3">

                            <input type="email" className="form-control"
                                   id="inputEmail" placeholder="Email"
                                   value={this.state.inputEmail}
                                   onChange={this.handleChangeEmail}
                                   name="inputEmail"/>
                        </div>
                    </div>
                    <div className="form-group row justify-content-center">

                        <div className="col-sm-3">
                            <input type="password" className="form-control" id="inputPassword"
                                   placeholder="Password"
                                   value={this.state.inputPassword}
                                   onChange={this.handleChangePassword}
                                   name="inputPassword"/>
                        </div>


                    </div>
                </form>
                <div className="btn">
                    <button onClick={this.setLogin} type="button" className="btn btn-primary" id="sbmtbtn">Login
                    </button>
                </div>
                <div className="link">
                </div>
            </div>
        );
    }

    renderTrue = () => {
        //в allevents надо будет передать атрибут с информацией о пользователе, который залогинился
        return (
            <div className="container-fluid">
                <div className={'row'}><InfoBlock className="col-sm-3"/>
                    <AllEvents email={this.state.inputEmail} password={this.state.inputPassword} className="col-sm-9"/>
                </div>

            </div>
        );
    }

    render() {
        if (!this.state.checkLogin) {
            return (this.renderFalse())
        }
        if (this.state.checkLogin) {
            return (this.renderTrue())
        }
    }

}

export default Login;