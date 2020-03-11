import React from "react";
import './registrationStyle.css';
import '../tools/Сonstants';
import {API_KEY_USER} from "../tools/Сonstants";

class RegistrationForm extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            gender: '1',
            firstName: '',
            lastName: '',
            email: '',
            password: '',
            confirmPassword: '',
            phoneNumber: '',
            firstRender: false,
            fieldsErrors: {},
            err: false, // if we catch errors, we will render our page with new error fields
            errFirstName: '',
            errLastName: '',
            errEmail: '',
            errPassword: '',
            errConfirmPassword: '',
            errPhoneNumber: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.errorsOnScreen = this.errorsOnScreen.bind(this);
    }

    handleClick = async () => {
        let parseObj;
        const data = {
            "gender": parseInt(this.state.gender),
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "phoneNumber": this.state.phoneNumber
        }


        if (this.state.password === this.state.confirmPassword) { // password validation
            try {
                const response = await fetch(API_KEY_USER, {
                    method: 'POST',
                    body: JSON.stringify(data),
                    headers: {
                        'accept': '*/*',
                        'Content-Type': 'application/json'
                    }
                });

                const json = await response.json();
                parseObj = JSON.parse(JSON.stringify(json));
                console.log(parseObj); //convert json string information to object // we will work with this obj, try to keep errors into the fields
                console.log('Успех:', JSON.stringify(json));
                if (!response.ok) {
                    this.setState({err: true}); // у нас появляется ошиька, поэтому нам нужно по-другому рендерить страницу и выводить информациюБ
                    // о том, где конкретно пользователь ввел неправильно данные
                    parseObj = JSON.parse(JSON.stringify(json));
                    console.log(parseObj); //convert json st
                    throw new Error(JSON.stringify(json));

                }
            } catch (error) {
                console.error(error);
            }
        } else {
            this.setState({err: true});
            this.setState({errFirstName: 'Name'});
            this.setState({errLastName: 'Surname'});
            this.setState({errEmail: 'Email'});
            this.setState({errPassword: "Passwords don't match"});
            this.setState({errPhoneNumber: 'Phone Number'});
            this.setState({errConfirmPassword: "Passwords don't match"});
        }

        this.setState({firstName: ''}); //обнуляем значения после кнопки регистрации, чтобы было видно плейсхолдеры с ошибкой
        this.setState({lastName: ''});
        this.setState({email: ''});
        this.setState({password: ''});
        this.setState({confirmPassword: ''});
        this.setState({phoneNumber: ''});
        this.setState({errConfirmPassword: 'Confirm Password'});

        if (parseObj != null) {
            await this.setState({fieldsErrors: parseObj});
            await this.errorsOnScreen();
        }
        await this.setState({firstRender: true});
    }

    onChangeInput = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    onClickSelect = (event) => {
        this.setState({gender: event.target.value});
    }

    errorsOnScreen = () => {
        if (this.state.fieldsErrors.fields.firstName) {
            this.setState({errFirstName: this.state.fieldsErrors.fields.firstName[0]});
        } else {
            this.setState({errFirstName: "Name"});
        }
        if (this.state.fieldsErrors.fields.lastName) {
            this.setState({errLastName: this.state.fieldsErrors.fields.lastName[0]});
        } else {
            this.setState({errLastName: "Surname"});
        }
        if (this.state.fieldsErrors.fields.email) {
            this.setState({errEmail: this.state.fieldsErrors.fields.email[0]});
        } else {
            this.setState({errEmail: "Email"});
        }
        if (this.state.fieldsErrors.fields.password) {
            this.setState({errPassword: this.state.fieldsErrors.fields.password[0]});
        } else {
            this.setState({errPassword: "Email"});
        }
        if (this.state.fieldsErrors.fields.phoneNumber) {
            this.setState({errPhoneNumber: this.state.fieldsErrors.fields.phoneNumber[0]});
        } else {
            this.setState({errPhoneNumber: "Email"});
        }
    }


    render() {
        if (this.state.firstRender === false) {
            return (
                <div className='container w-100'>
                    <div className='regist flex-column'><u>REGISTRATION</u></div>
                    <div className='d-flex justify-content-center'>
                        <div className='flex-column w-50'>
                            <div className='title d-inline-flex p-4'>
                                Contact information
                            </div>
                            <div className='salutations text-left'>
                                <div className='flex-column form-inline w-100'>
                                    <select onChange={this.onClickSelect}
                                            className="drp1 w-100 custom-select my-1 mr-sm-2"
                                            id="inlineFormCustomSelectPref">
                                        <option value='1'>Mr.</option>
                                        <option value='2'>Mrs/Miss</option>
                                    </select>
                                </div>
                                <div className='flex-column'>
                                    <input name="firstName" className='w-100' type="text"
                                           placeholder='Name'
                                           value={this.state.firstName}
                                           onChange={this.onChangeInput}/></div>
                                <div className='flex-column'>
                                    <input name="lastName" className='w-100' type="text"
                                           placeholder='Surname'
                                           value={this.state.lastName}
                                           onChange={this.onChangeInput}/>
                                </div>
                                <div className='flex-column'>
                                    <input name="email" className='w-100' type="email"
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
                                <div className='flex-column'>
                                    <input name="confirmPassword" className='w-100'
                                           type="password"
                                           placeholder='Confirm Password'
                                           value={this.state.confirmPassword}
                                           onChange={this.onChangeInput}/>
                                </div>
                                <div className='flex-column'>
                                    <input name='phoneNumber' className='w-100' type="text"
                                           placeholder='Phone Number'
                                           value={this.state.phoneNumber}
                                           onChange={this.onChangeInput}/>
                                </div>

                            </div>
                            <div className='check flex-column text-left small'>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck1"/>
                                    <label className="form-check-label" htmlFor="defaultCheck1">
                                        I have read
                                    </label>
                                </div>
                                <div className="form-check">
                                    <input className="form-check-input" type="checkbox" value="" id="defaultCheck2"/>
                                    <label className="form-check-label" htmlFor="defaultCheck2">
                                        I agree
                                    </label>
                                </div>
                            </div>

                            <div className='flex-column'>
                                <button onClick={this.handleClick} className='btnRegister'>Register</button>
                            </div>
                        </div>
                    </div>
                </div>
            )
        }
        if (this.state.firstRender === true) { //рендер после отправки формы регистрации
            if (this.state.err === false) { // рендер в случае отсутсвия ошибок при вводе данных
                return (
                    <div>Graduations! You have registered</div>
                )
            }
            if (this.state.err === true) { //рендер в случае наличия ошибок при вводе данных
                return (
                    <div className='container w-100'>
                        <div className='regist flex-column'><u>REGISTRATION</u></div>
                        <div className='d-flex justify-content-center'>
                            <div className='flex-column w-50'>
                                <div className='title d-inline-flex p-4'>
                                    Contact information
                                </div>
                                <div className='salutations text-left'>
                                    <div className='flex-column form-inline w-100'>
                                        <select onChange={this.onClickSelect}
                                                className="drp1 w-100 custom-select my-1 mr-sm-2"
                                                id="inlineFormCustomSelectPref">
                                            <option value='1'>Mr.</option>
                                            <option value='2'>Mrs/Miss</option>
                                        </select>
                                    </div>
                                    <div className='flex-column'>
                                        <input name="firstName" className='w-100' type="text"

                                               placeholder={this.state.errFirstName}
                                               value={this.state.firstName}
                                               onChange={this.onChangeInput}/></div>
                                    <div className='flex-column'>
                                        <input name="lastName" className='w-100' type="text"
                                               placeholder={this.state.errLastName}
                                               value={this.state.lastName}
                                               onChange={this.onChangeInput}/>
                                    </div>
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
                                    <div className='flex-column'>
                                        <input name="confirmPassword" className='w-100'
                                               type="password"
                                               placeholder={this.state.errConfirmPassword}
                                               value={this.state.confirmPassword}
                                               onChange={this.onChangeInput}/>
                                    </div>
                                    <div className='flex-column'>
                                        <input name='phoneNumber' className='w-100' type="text"
                                               placeholder={this.state.errPhoneNumber}
                                               value={this.state.phoneNumber}
                                               onChange={this.onChangeInput}/>
                                    </div>

                                </div>
                                <div className='check flex-column text-left small'>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="defaultCheck1"/>
                                        <label className="form-check-label" htmlFor="defaultCheck1">
                                            I have read
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="checkbox" value=""
                                               id="defaultCheck2"/>
                                        <label className="form-check-label" htmlFor="defaultCheck2">
                                            I agree
                                        </label>
                                    </div>
                                </div>

                                <div className='flex-column'>
                                    <button onClick={this.handleClick} className='btnRegister'>Register</button>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        }
    }
}

export default RegistrationForm;