import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import {connect} from "react-redux";
import {API_KEY_EVENTLISTBYDATE, API_KEY_LOGIN} from "./tools/Сonstants";
import Event from "./components/Event";


class AllEvents extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            events: {},
            page: 1,
            disabledBtn: true
        }

        this.numbers = [];
        for (let i = 0; i < 4; i++) {
            this.numbers[i] = i;
        }

        this.prevPageHandleClick = this.prevPageHandleClick.bind(this);
        this.nextPageHandleClick = this.nextPageHandleClick.bind(this);
    }


    nextPageHandleClick = async () => { // T D
        this.setState({page: this.state.page + 1});
        this.setState({disabledBtn: false});

        let parseObj;
        const data = {
            "dateFrom": 1,
            "dateTo": 100000000000000000
        }
        try {
            const response = await fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/${this.state.page + 1}/4`, {
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
            await console.log(this.state.events);
        } catch (e) {

        }


    }
    prevPageHandleClick = () => {
        const page = this.state.page;
        if (page > 2) {
            this.setState({page: page - 1});
        }
        if (page == 2) {
            this.setState({disabledBtn: true});
            this.setState({page: page - 1});
        }
    }


    componentDidMount() {
        const data = {
            "dateFrom": 1,
            "dateTo": 100000000000000000
        }
        fetch(`https://ticketserviceapp.herokuapp.com/events/bydate/1/4`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "accept": "*/*",
                "Content-Type": "application/json"
            }

        })
            .then(response => response.json())
            .then(json => {
                this.setState({events: JSON.parse(JSON.stringify(json))})
            });
    }

    render() {
        const events = this.state.events;
        console.log(events);
        //TO DO
        if (events[0]) {
            // let ev = events[2].eventStart;
            // let date = new Date(ev);
            // console.log(date);
            return (
                <div>
                    <div className="col-sm-12">
                        <div>
                            {events.map((number, index) => <Event key={index}/>)}
                        </div>
                        <div className='row pages'>
                            <div className='col-sm-4'>
                                <div className='row'>
                                    <button className='nextBtn' disabled={this.state.disabledBtn}
                                            onClick={this.prevPageHandleClick}>Prev page
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
                                    <button className='nextBtn' onClick={this.nextPageHandleClick}>Next page</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )
        } else {
            return (<div></div>);
        }
    }

}

export default AllEvents;