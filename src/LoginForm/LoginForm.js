import React from "react";
import './LoginFormCss.css';
import '../tools/Сonstants';
import {API_KEY_LOGIN} from "../tools/Сonstants";
import Main from "../Main/Main";

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // adminmasa@gmail.com
            // adminmasa
            email: '',
            password: '',
            firstRender: false,
            fieldsErrors: {},
            err: false, // if we catch errors, we will render our page with new error fields
            errEmail: 'Email not entered',
            errPassword: 'Password not entered',
            errMessage: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    onChangeInput = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    handleClick = async () => {
        let parseObj;
        const data = {
            "email": this.state.email,
            "password": this.state.password,
        }


        if (this.state.password.length > 0 && this.state.email.length > 0) {
            try {
                const response = await fetch(API_KEY_LOGIN, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        "accept": "*/*",
                        "Content-Type": "application/json"
                    }
                });

                const json = await response.json();
                parseObj = JSON.parse(JSON.stringify(json));
                if (!(response.ok)) {
                    this.setState({err: true});
                    parseObj = JSON.parse(JSON.stringify(json));//convert json st
                    console.log(parseObj);
                    this.setState({errMessage: parseObj.message});

                    //throw new Error(JSON.stringify(json));
                } else if(response.ok){
                    this.setState({err: false});
                }
            } catch (error) {
                console.error(error);
            }
        } else {
            this.setState({err: true});
            this.setState({errMessage: 'Fields are empty'});
            this.setState({errEmail: 'Email not entered'});
            this.setState({errPassword: "Password not entered"});

        }

        if (parseObj != null) {
            await this.setState({fieldsErrors: parseObj});
            // await this.errorsOnScreen();
        }
        await this.setState({firstRender: true});
    }


    firstRender = () => {
        return (
            <div className='container w-50 '>
                <div className='regist flex-column p-3'><u>LOGIN</u></div>
                <div className='d-flex justify-content-center'>
                    <div className='flex-column w-50'>
                        <div className='salutations text-left'>
                            <div className='flex-column'>
                                <input autoFocus name="email" className='w-100' type="email"
                                       placeholder='Email'
                                       value={this.state.email}
                                       onChange={this.onChangeInput}/>
                            </div>
                            <div className='flex-column'>
                                <input name="password" className='w-100' type="password"
                                       placeholder='Password'
                                       value={this.state.password}
                                       onChange={this.onChangeInput}/>
                            </div>
                        </div>
                        <div className='flex-column p-3'>
                            <button onClick={this.handleClick} className='btnRegister'>Login</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    secondRender = () => {
        if (this.state.err === false) { // рендер в случае отсутсвия ошибок при вводе данных
            return (
                <div>
                    {/*Congratulations! You are entered.*/}
                    <Main checkLogin={true}/>
                </div>
            )
        }
        if (this.state.err === true) { //рендер в случае наличия ошибок при вводе данных
            return (
                <div className='container w-50'>
                    <div className='regist flex-column p-3'><u>LOGIN</u></div>
                    <div className='d-flex justify-content-center'>
                        <div className='flex-column w-50'>
                            <div className='error'>{this.state.errMessage}</div>
                            <div className='salutations text-left'>
                                <div className='flex-column'>
                                    <input name="email" className='w-100' type="email"
                                           placeholder={this.state.errEmail}
                                           value={this.state.email}
                                           onChange={this.onChangeInput}/>
                                </div>
                                <div className='flex-column'>
                                    <input name="password" className='w-100'
                                           type="password"
                                           placeholder={this.state.errPassword}
                                           value={this.state.password}
                                           onChange={this.onChangeInput}/>
                                </div>
                            </div>
                            <div className='flex-column p-3'>
                                <button onClick={this.handleClick} className='btnRegister'>LOGIN</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
    }


    render() {
        if (this.state.firstRender === false) {
            return this.firstRender();

        }
        if (this.state.firstRender === true) { //рендер после отправки формы регистрации
            return this.secondRender();
        }
    }
}

export default LoginForm;