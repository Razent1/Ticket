import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/AllEventCss.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCoffee} from '@fortawesome/free-solid-svg-icons'
import {BarLoader, ClockLoader} from "react-spinners";
import {css} from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;


class Event extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            date: [],
            progress: {},
            isLoading: true
        }
        this.months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    }

    componentDidMount() {
        const info = this.props.event;

        fetch(`https://ticketserviceapp.herokuapp.com/moderator/countprogress/${info.eventId}`, {
            headers: {
                "accept": "*/*",
                "token": `${localStorage.getItem('email')}`
            }
        })
            .then(response => response.json())
            .then(json => {
                this.setState({
                    progress: JSON.parse(JSON.stringify(json))

                })
                this.setState({isLoading: false});
            })
            .catch(e => console.log(e));

        // let date = new Date(info.eventStart);
        // let dateArr = date.toString().split(' ');
        //
        // dateArr[4] = dateArr[4].substring(0, 5); //убираем секунды
        //
        // if (dateArr[2].charAt(0) === '0') { //убираем нули из дня, если они имеются
        //     dateArr[2] = dateArr[2].substr(1);
        // }
        // for (let i = 0; i < this.months.length; i++) { //меняем месяч с сокращенного варианта в три буквы на полноценный
        //     if (this.months[i].substring(0, 3) === dateArr[1]) {
        //         dateArr[1] = this.months[i];
        //     }
        // }
        // this.setState({date: dateArr});
    }

    render() {
        //TO DO

        const info = this.props.event;
        const date = this.state.date;
        const progress = this.state.progress;
        return (
            <div>
                <div className="curEvent col-sm-12">
                    <div className="row">
                        <div className="array col-sm-12">
                            <div className="row">
                                <div className="concertPic col-sm-3">
                                    <img className="concertJpg w-100" src={info.images[0]}
                                         alt=""/>
                                </div>
                                <div className="col-sm-4">
                                    <div className="progress">
                                        {/*<div className="progress-bar progress-bar-striped progress-bar-animated"*/}
                                        {/*     role="progressbar"*/}
                                        {/*     style={{width: `${progress.cprogress[0].totalAmounts / 100 * progress.cprogress[0].soldAmounts}%`}}*/}
                                        {/*     aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className='col-sm'>
                                        <div className='row'><h2>{info.artist}</h2></div>
                                        <div className='row'><p>{info.eventName}</p></div>
                                    </div>
                                </div>
                                {/*<div*/}
                                {/*    className='col-sm-1'>*/}
                                {/*    <div className='row'>*/}
                                {/*        <small*/}
                                {/*            className='progressText'>{progress.cprogress[0].totalAmounts / 100 * progress.cprogress[0].soldAmounts} %*/}
                                {/*            SOLD OUT</small></div>*/}
                                {/*</div>*/}
                                <div className=" date2 col-sm-2 align-self-start">
                                    <p>{new Date(info.eventStart).getDate()} {this.months[new Date(info.eventStart).getMonth()]}</p>
                                    <p>Hall {info.hall}</p>
                                    <p>{new Date(info.eventStart).getHours()}:{new Date(info.eventStart).getMinutes()}0</p>
                                </div>
                                <div className="d-flex flex-column flex-fill align-items-end">
                                    <div className="d-flex flex-row ">img2</div>
                                    <div className='d-flex flex-row flex-fill align-items-end'>img</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }

}

export default Event;