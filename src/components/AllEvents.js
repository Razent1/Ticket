import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {connect} from "react-redux";
import {API_KEY_EVENTLISTBYDATE, API_KEY_LOGIN} from "../tools/Сonstants";
import Event from "./Event";
import ClipLoader from "react-spinners/ClipLoader";
import {css} from "@emotion/core";
import {ClockLoader} from "react-spinners";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowRight, faArrowLeft, faSortDown, faSortUp, faEdit, faEye} from "@fortawesome/free-solid-svg-icons";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

const nextIcon = <FontAwesomeIcon icon={faArrowRight}/>;
const prevIcon = <FontAwesomeIcon icon={faArrowLeft}/>;
const dateIconDown = <FontAwesomeIcon icon={faSortDown}/>;
const dateIconUp = <FontAwesomeIcon icon={faSortUp}/>;
const editIcon = <FontAwesomeIcon icon={faEdit}/>;
const eyeIcon = <FontAwesomeIcon icon={faEye}/>;

class AllEvents extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: {},
            page: 1,
            disabledBtn: true,
            isLoading: true,
            isDateSorting: true,
            isHallSorting: true
        };

        this.numbers = [];
        for (let i = 0; i < 4; i++) {
            this.numbers[i] = i;
        }

        this.prevPageHandleClick = this.prevPageHandleClick.bind(this);
        this.nextPageHandleClick = this.nextPageHandleClick.bind(this);
    }


    dateSortingHandleClick = () => {
        const isSorting = this.state.isDateSorting;
        const events = this.state.events;
        this.setState({isDateSorting: !isSorting});
        events.sort(function (a, b) {
            if (!isSorting) {
                return a.eventStart - b.eventStart;
            }
            if (isSorting) {
                return b.eventStart - a.eventStart;
            }
            return 0;
        });
    };

    hallSortingHandleClick = () => {
        const isSorting = this.state.isHallSorting;
        const events = this.state.events;
        this.setState({isHallSorting: !isSorting});

        events.sort(function (a, b) {
            if (!isSorting) {
                return a.hall - b.hall;
            }
            if (isSorting) {
                return b.hall - a.hall;
            }
            return 0;
        });
    };


    nextPageHandleClick = async () => {
        this.setState({isDateSorting: true});
        this.setState({isHallSorting: true});
        this.setState({page: this.state.page + 1});
        this.setState({isLoading: true});
        this.setState({disabledBtn: false});

        let parseObj;
        const data = {
            "dateFrom": 1,
            "dateTo": 100000000000000000
        };
        try {
            const response = await fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/${this.state.page + 1}/5`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "accept": "*/*",
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            parseObj = JSON.parse(JSON.stringify(json));
            this.setState({events: parseObj});
            await this.setState({isLoading: false});

        } catch (e) {
            console.log(e);
        }

    };
    prevPageHandleClick = async () => {
        const page = this.state.page;
        this.setState({page: page - 1});
        this.setState({isLoading: true});
        this.setState({isDateSorting: true});
        this.setState({isHallSorting: true});

        let parseObj;
        const data = {
            "dateFrom": 1,
            "dateTo": 100000000000000000
        };
        try {
            const response = await fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/${this.state.page - 1}/5`, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    "accept": "*/*",
                    "Content-Type": "application/json"
                }
            });
            const json = await response.json();
            parseObj = JSON.parse(JSON.stringify(json));
            this.setState({events: parseObj});
            await this.setState({isLoading: false});
        } catch (e) {
            console.log(e);
        }
        if (page === 2) { //деактивируем кнопку, если мы находимся на первой странице
            this.setState({disabledBtn: true});
        }
    };


    componentDidMount() {
        const data = {
            "dateFrom": 1,
            "dateTo": 100000000000000000
        };

        fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/1/5`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json"
            }

        })
            .then(response => response.json())
            .then(json => {
                this.setState({events: JSON.parse(JSON.stringify(json))});
                this.setState({isLoading: false});
            });
    }

    render() {
        if (this.state.isLoading === false) {
            const {events, page, disabledBtb} = this.state;
            return (
                <div>
                    <div className="col-sm-12">
                        <div className='dateSort row align-items-center'>
                            <div className='col-sm-3'></div>
                            <div className='col-sm-4'></div>
                            <div className='col-sm '>
                                <div className='row justify-content-center'>
                                    <button
                                        onClick={this.dateSortingHandleClick} className='btnDate'>
                                        <div
                                            className='d-flex flex-wrap justify-content-sm-around align-items-sm-center'
                                            style={{width: '70px', height: '30px'}}>
                                            <div
                                                className='d-flex'>{this.state.isDateSorting ? dateIconDown : dateIconUp}</div>
                                            <div className='d-flex  ' style={{fontSize: '20px'}}>Date</div>
                                        </div>
                                    </button>
                                </div>
                            </div>
                            <div className="col-sm ">
                                <div className='row justify-content-end'>
                                    <button
                                        onClick={this.hallSortingHandleClick} className='btnDate'>
                                        <div
                                            className='d-flex flex-wrap justify-content-sm-around align-items-sm-center'
                                            style={{width: '70px', height: '30px'}}>
                                            <div
                                                className='d-flex'>{this.state.isHallSorting ? dateIconDown : dateIconUp}</div>
                                            <div className='d-flex ' style={{fontSize: '20px'}}>Hall</div>
                                        </div>
                                    </button>
                                </div>
                            </div>

                        </div>
                        <div>
                            {events.map((event, index) => <Event key={index} event={event}/>)}
                        </div>
                        <div className='row pages'>
                            <div className='col-sm-4'>
                                <div className='row'>
                                    <button className='nextBtn' disabled={this.state.disabledBtn}
                                            onClick={this.prevPageHandleClick}>{prevIcon} Back
                                    </button>
                                </div>
                            </div>
                            <div className='col-sm-4 '>
                                <div className='row justify-content-center'>
                                    {this.state.page}
                                </div>
                            </div>
                            <div className='col-sm-4'>
                                <div className='row justify-content-end'>
                                    <button className='nextBtn'
                                            onClick={this.nextPageHandleClick}>Next {nextIcon}</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div>
                <ClockLoader
                    css={override}
                    size={100}
                    color={"#123abc"}
                    loading={this.state.isLoading}
                />
            </div>);
        }
    }

}

export default AllEvents;