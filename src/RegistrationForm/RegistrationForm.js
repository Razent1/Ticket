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
            phoneNumber: ''
        }
        this.onChangeInput = this.onChangeInput.bind(this);
    }

    handleClick = async () => {
        const data = {
            "gender": parseInt(this.state.gender),
            "firstName": this.state.firstName,
            "lastName": this.state.lastName,
            "email": this.state.email,
            "password": this.state.password,
            "phoneNumber": this.state.phoneNumber
        }

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
            console.log('Успех:', JSON.stringify(json));

        } catch (error) {
            console.error(error);
        }


    }

    onChangeInput = (event) => {
        const name = event.target.name;
        this.setState({[name]: event.target.value});
    }

    onClickSelect = (event) => {
        this.setState({gender: event.target.value});
    }


    render() {
        console.log(this.state.gender);
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
                                <select onChange={this.onClickSelect} className="drp1 w-100 custom-select my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref">
                                    <option value='1'>Mr.</option>
                                    <option value='2'>Mrs/Miss</option>
                                </select>
                            </div>
                            <div className='flex-column'><input name="firstName" className='w-100' type="text"
                                                                placeholder='Name'
                                                                value={this.state.firstName}
                                                                onChange={this.onChangeInput}/></div>
                            <div className='flex-column'><input name="lastName" className='w-100' type="text"
                                                                placeholder='Surname'
                                                                value={this.state.lastName}
                                                                onChange={this.onChangeInput}/>
                            </div>
                            <div className='flex-column'><input name="email" className='w-100' type="email"
                                                                placeholder='Email'
                                                                value={this.state.email} onChange={this.onChangeInput}/>
                            </div>
                            <div className='flex-column'><input name="password" className='w-100' type="text"
                                                                placeholder='Password'
                                                                value={this.state.password}
                                                                onChange={this.onChangeInput}/>
                            </div>
                            <div className='flex-column'><input className='w-100' type="text"
                                                                placeholder='Confirm Password'
                            /></div>
                            <div className='flex-column'><input name='phoneNumber' className='w-100' type="text"
                                                                placeholder='Phone Number'
                                                                value={this.state.phoneNumber}
                                                                onChange={this.onChangeInput}/></div>

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
}

export default RegistrationForm;