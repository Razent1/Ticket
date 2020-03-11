import React from "react";
import InfoBlock from "../InformationBlock/InfoBlock";
import AllEvents from "../AllEvents";

class Main extends React.Component{

    render() {
        return (
            <div className='d-flex row'>
                <div className='col-sm-3'>cal</div>
                <div className='col-sm-9'><AllEvents/></div>

            </div>
        )
    }

}

export default Main;