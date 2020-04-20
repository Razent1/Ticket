import React from "react";
import './NewEvent.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faSortDown, faCalendar} from "@fortawesome/free-solid-svg-icons";
import Dropdown from 'react-dropdown';
import {Form} from "react-bootstrap";


const arrDown = <FontAwesomeIcon icon={faSortDown}/>;
const calIcon = <FontAwesomeIcon icon={faCalendar}/>;

class NewEvent extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            selectedOption: null,
        }
    }

    handleChange = selectedOption => {
        this.setState(
            {selectedOption},
            () => this.setState({select: selectedOption.value})
        );
    };

    naiveReverse = function (string) {
        let arr = string.split('');
        arr.splice(arr.length - 5);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === ',') {
                let p = arr.slice(0, i);
                arr.push('-');
                arr = arr.concat(p);
                arr.splice(0, i + 1);
                i = 0;
            }
        }
        let str = string.slice(-4);
        arr = str + '-' + arr.join('');
        return arr;
    };

    render() {
        const {selectedOption, select} = this.state;
        let x = new Date();
        console.log(x.toLocaleDateString().replace(/\D/g, ','));
        return (
            <div className='box2 container'>
                <div className='row radius'>
                    <div className='col-sm-12 col-lg-9 infoBlock'>
                        <h5><input type="text" placeholder='Type the name of Event'
                                   className='w-100 input__typename'/></h5>
                        <h5><input type="text" placeholder='Artist/Performer' className='w-100 input__artist'/></h5>
                        <div className='row'>
                            <div className='col-sm-12 col-lg-3 eventInfo'>
                                <div>Place</div>
                                <div>Date of event</div>
                                <div>Time</div>
                                <div>Select hall</div>
                                <div>Type of event</div>
                            </div>
                            <div className='col-sm-12 col-lg-9 choseBlock'>
                                <div className='form-inline row'>
                                    <div style={{
                                        position: "relative",
                                        bottom: '2px',
                                        marginRight: '10px',
                                        marginLeft: '10px'
                                    }}>{arrDown}</div>
                                    <select className="select__place w-25"
                                            id="inlineFormCustomSelectPref">
                                        <option value="brlnCityHall">Berlin City Hall</option>
                                    </select>

                                </div>
                                {/*<div style={{cursor: "pointer"}}>*/}
                                {/*    <Dropdown  options={place} onChange={this.handleChange}*/}
                                {/*              placeholder={<div className='row '>*/}
                                {/*                  <div style={{*/}
                                {/*                      position: "relative",*/}
                                {/*                      bottom: '2px',*/}
                                {/*                      marginRight: '15px',*/}
                                {/*                      marginLeft: '10px'*/}
                                {/*                  }}>{arrDown} </div>*/}
                                {/*                  {select}</div>}/>*/}
                                {/*</div>*/}
                                <div className='row'>
                                    <div style={{
                                        marginRight: '10px',
                                        marginLeft: '10px'
                                    }}>{calIcon}</div>
                                    <div><input value={this.naiveReverse(x.toLocaleDateString().replace(/\D/g, ','))}
                                                type="date"/></div>
                                </div>
                            </div>

                        </div>
                    </div>

                    <div className='col-sm-12 col-lg-3'>2</div>
                </div>

            </div>
        )
    };
}

export default NewEvent;