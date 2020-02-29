import React from "react";
import './registrationStyle.css'

class RegistrationForm extends React.Component {

    render() {
        return (
            <div className='container w-75'>
                <div className='col'>Registration</div>
                <div className='d-flex justify-content-center'>
                    <div className='flex-column w-50'>
                        <div className='d-inline-flex p-4'>
                            Salutation and address
                        </div>
                        <div className='salutations text-left'>
                            <div className='flex-column dropdown w-100'>
                                <button className=" drp1 btn w-100 btn-secondary dropdown-toggle text-left"
                                        type="button"
                                        id="dropdownMenu2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Mr
                                </button>
                                <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                    <button className="dropdown-item" type="button">Mrs/Miss</button>
                                </div>

                            </div>
                            <div className='col'><input className='w-100' type="text" placeholder='Name'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='Surname'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='Company'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='Street'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='House'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='Additional info'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='Postcode'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='City'/></div>
                            <div className='col'><input className='w-100' type="text" placeholder='Country'/></div>
                        </div>
                    </div>
                    <div className='flex-column'>
                        <div className='d-inline-flex p-4'>
                            Contact Information

                        </div>
                        <div className='col'>Email</div>
                        <div className='col'>Password</div>
                        <div className='col'>Confirm Password</div>
                        <div className='col'>Phone Number</div>
                        <div className='col'>Additional phone number</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default RegistrationForm;