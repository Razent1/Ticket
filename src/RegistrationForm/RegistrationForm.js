import React from "react";

class RegistrationForm extends React.Component {

    render() {
        return (
            <div className='container'>
                <div className='col'>Registration</div>
                <div className='d-flex justify-content-center'>
                    <div className='flex-column'>
                        <div>Salutation and address</div>
                        <div className='col dropdown'>
                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Mr
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                                <button className="dropdown-item" type="button">Mrs/Miss</button>
                            </div>

                        </div>
                        <div className='col'>Name</div>
                        <div className='col'>Surname</div>
                        <div className='col'>Company</div>
                        <div className='col'>Street</div>
                        <div className='col'>House</div>
                        <div className='col'>Additional info</div>
                        <div className='col'>Postcode</div>
                        <div className='col'>City</div>
                        <div className='col'>Country</div>
                    </div>
                    <div className='flex-column'>
                        <div className='flex-column offset-3 align-self-stretch'>
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