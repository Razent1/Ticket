import React from "react";
import InfoBlock from "../InformationBlock/InfoBlock";
import AllEvents from "../AllEvents";
import './Main.css'

class Main extends React.Component {

    render() {
        return (
            <div className='d-flex row'>
                <div className='col-sm-3'>
                    <InfoBlock className='col-sm-3'/>
                </div>
                <div className='col-sm-9'>
                    <AllEvents className='col-sm-9'/>
                </div>

            </div>
        )
    }

}

export default Main;