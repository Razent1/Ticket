import React from "react";
import './registrationStyle.css'

class RegistrationForm extends React.Component {

    render() {
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
                                <select className="drp1 w-100 custom-select my-1 mr-sm-2"
                                        id="inlineFormCustomSelectPref">
                                    <option selected>Mr.</option>
                                    <option value="1">Mrs/Miss</option>
                                </select>
                            </div>
                            <div className='flex-column'><input className='w-100' type="text" placeholder='Name'/></div>
                            <div className='flex-column'><input className='w-100' type="text" placeholder='Surname'/></div>
                            <div className='flex-column'><input className='w-100' type="text" placeholder='Email'/></div>
                            <div className='flex-column'><input className='w-100' type="text" placeholder='Password'/></div>
                            <div className='flex-column'><input className='w-100' type="text" placeholder='Confirm Password'/></div>
                            <div className='flex-column'><input className='w-100' type="text" placeholder='Phone Number'/></div>

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
                            <button className='btnRegister'>Register</button>
                        </div>

                    </div>

                </div>
            </div>
        )
    }
}

export default RegistrationForm;