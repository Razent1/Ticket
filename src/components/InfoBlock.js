import React from 'react';
import '../styles/InfoBlockCss.css';
import 'jquery';
import 'bootstrap';
import Cal from "../Calendar/Calendar";


class InfoBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checkDataEvent: true
        }
    }

    data = () => {
        this.setState({checkDataEvent: true})

    }
    event = () => {
        this.setState({checkDataEvent: false})


    }


    renderData = () => {
        return (
            <div className="container-fluid">

                <section className="form-tabs">
                    <div style={{top: "0px"}} className="form-tabs__slider"></div>
                    <button style={{color: "#ECEFF1"}} onClick={this.data}
                            className="form-tabs__btn form-tabs__btn_data" type="button">DATA
                    </button>
                    <button style={{color: "#000000"}} onClick={this.event}
                            className="form-tabs__btn form-tabs__btn_event" type="button">EVENT
                    </button>
                </section>

                <section style={{visibility: "hidden"}} className="form-event">
                    <form action="">
                        <section className="credentials-form-item">
                            <div className='event'>

                                <img src="ev1.png" alt="event1"/>
                                <h6 className={'art'}><span>Beyonce in tour   </span></h6>
                                <h6 className={'date'}><span>December 22   </span></h6>
                                <h6 className={'time'}><span> 18:00  </span></h6>
                                <h6 className={'right'}><span>  sold out</span></h6>

                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div className='event'>

                                <img src="ev2.png" alt="event1"/>
                                <h6 className={'art'}><span>Lady Gaga in tour   </span></h6>
                                <h6 className={'date'}><span>December 22   </span></h6>
                                <h6 className={'time'}><span> 18:00  </span></h6>
                                <h6 className={'right'}><span>  sold out</span></h6>

                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div className='event'>

                                <img src="ev3.png" alt="event1"/>
                                <span className={'art'}>Til Schweiger in tour   </span>
                                <span className={'date'}>December 22   </span>
                                <span className={'time'}> 18:00  </span>
                                <span className={'right'}>  sold out</span>

                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 4
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 5
                            </div>
                        </section>
                    </form>
                </section>
                <section style={{visibility: "visible"}} className={'form-data'}>
                    <form action={''}>
                        <section className={'credentials-form-item'}>
                            <div className="container">
                                <div className="row">

                                        <div className="bc_title">Hall 1</div>
                                        <Cal/>
                                    
                                </div>
                            </div>
                        </section>
                        <section className={'credentials-form-item'}>
                            <div className="container">
                                <div className="row">
                                    <div>
                                        <div className="bc_title">Hall 2</div>
                                        <Cal/>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </section>
            </div>
        );
    }
    renderEvent = () => {
        return (
            <div className="container-fluid">
                <section className="form-tabs">
                    <div style={{top: "40px"}} className="form-tabs__slider"></div>
                    <button style={{color: "#000000"}} onClick={this.data}
                            className="form-tabs__btn form-tabs__btn_data" type="button">DATA
                    </button>
                    <button style={{color: "#ECEFF1"}} onClick={this.event}
                            className="form-tabs__btn form-tabs__btn_event" type="button">EVENT
                    </button>
                </section>
                <section style={{visibility: "visible"}} className="form-event">
                    <form action="">
                        <section className="credentials-form-item">
                            <div className='event'>

                                <img src="ev1.png" alt="event1"/>
                                <h6 className={'art'}><span>Beyonce in tour   </span></h6>
                                <h6 className={'date'}><span>December 22   </span></h6>
                                <h6 className={'time'}><span> 18:00  </span></h6>
                                <h6 className={'right'}><span>  sold out</span></h6>

                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div className='event'>

                                <img src="ev2.png" alt="event1"/>
                                <h6 className={'art'}><span>Lady Gaga in tour   </span></h6>
                                <h6 className={'date'}><span>December 22   </span></h6>
                                <h6 className={'time'}><span> 18:00  </span></h6>
                                <h6 className={'right'}><span>  sold out</span></h6>

                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div className='event'>

                                <img src="ev3.png" alt="event1"/>
                                <span className={'art'}>Til Schweiger in tour   </span>
                                <span className={'date'}>December 22   </span>
                                <span className={'time'}> 18:00  </span>
                                <span className={'right'}>  sold out</span>

                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 4
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 5
                            </div>
                        </section>
                    </form>
                </section>
                <section style={{visibility: "hidden"}} className={'form-data'}>
                    <form action={''}>
                        <section className={'credentials-form-item'}>
                            <div className="container">
                                <div className="row">
                                    <div className="span12">
                                        <div className="bc_title">Hall 1</div>
                                        <div className="bc">
                                            <center>
                                                <div id="calendar-layer">
                                                    <table
                                                        className="calendar table-condensed table-bordered table-striped"
                                                        id="calendar">
                                                        <thead>
                                                        <tr>
                                                            <th className="monthselect" colSpan="7"><a
                                                                className="monthlink"
                                                                href=""
                                                                onClick="doCalendar('02','2020','right'); return false;"
                                                                title="last month">&laquo;</a>&nbsp;&nbsp;&nbsp;&nbsp;Martch
                                                                2020&nbsp;&nbsp;&nbsp;&nbsp;&raquo;
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th className="workday">Su</th>
                                                            <th className="workday">Mo</th>
                                                            <th className="workday">Tu</th>
                                                            <th className="workday">We</th>
                                                            <th className="workday">Th</th>
                                                            <th className="weekday">Fr</th>
                                                            <th className="weekday">Sa</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td colSpan="5">&nbsp;</td>
                                                            <td className="day-active"><a className="day-active"
                                                                                          href=""
                                                                                          title="">1</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">2</a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">3</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">4</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">5</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">6</a>
                                                            </td>
                                                            <td className="day-active"><a className="day-active"
                                                                                          href=""
                                                                                          title="">7</a>
                                                            </td>
                                                            <td className="day-active day-current"><a
                                                                className="day-active"
                                                                href=""
                                                                title="">8</a></td>
                                                            <td className="day">9</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="day">10</td>
                                                            <td className="day">11</td>
                                                            <td className="day">12</td>
                                                            <td className="day">13</td>
                                                            <td className="weekday">14</td>
                                                            <td className="weekday">15</td>
                                                            <td className="day">16</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="day">17</td>
                                                            <td className="day">18</td>
                                                            <td className="day">19</td>
                                                            <td className="day">20</td>
                                                            <td className="weekday">21</td>
                                                            <td className="weekday">22</td>
                                                            <td className="day">23</td>

                                                        </tr>
                                                        <tr>
                                                            <td className="day">24</td>
                                                            <td className="day">25</td>
                                                            <td className="day">26</td>
                                                            <td className="day">27</td>
                                                            <td className="weekday">28</td>
                                                            <td className="weekday">29</td>
                                                            <td className="day">30</td>

                                                        </tr>
                                                        <tr>
                                                            <td className="day">31</td>
                                                            <td colSpan="6">&nbsp;</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={'credentials-form-item'}>
                            <div className="container">
                                <div className="row">
                                    <div className="span12">
                                        <div className="bc_title">Hall 2</div>
                                        <div className="bc">
                                            <center>
                                                <div id="calendar-layer">
                                                    <table
                                                        className="calendar table-condensed table-bordered table-striped"
                                                        id="calendar">
                                                        <thead>
                                                        <tr>
                                                            <th className="monthselect" colSpan="7"><a
                                                                className="monthlink"
                                                                href=""
                                                                onClick="doCalendar('02','2020','right'); return false;"
                                                                title="last month">&laquo;</a>&nbsp;&nbsp;&nbsp;&nbsp;Martch
                                                                2020&nbsp;&nbsp;&nbsp;&nbsp;&raquo;
                                                            </th>
                                                        </tr>
                                                        <tr>
                                                            <th className="workday">Su</th>
                                                            <th className="workday">Mo</th>
                                                            <th className="workday">Tu</th>
                                                            <th className="workday">We</th>
                                                            <th className="workday">Th</th>
                                                            <th className="weekday">Fr</th>
                                                            <th className="weekday">Sa</th>

                                                        </tr>
                                                        </thead>
                                                        <tbody>
                                                        <tr>
                                                            <td colSpan="5">&nbsp;</td>
                                                            <td className="day-active"><a className="day-active"
                                                                                          href=""
                                                                                          title="">1</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">2</a>
                                                            </td>
                                                        </tr>
                                                        <tr>

                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">3</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">4</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">5</a>
                                                            </td>
                                                            <td className="day-active-v"><a className="day-active-v"
                                                                                            href=""
                                                                                            title="">6</a>
                                                            </td>
                                                            <td className="day-active"><a className="day-active"
                                                                                          href=""
                                                                                          title="">7</a>
                                                            </td>
                                                            <td className="day-active day-current"><a
                                                                className="day-active"
                                                                href=""
                                                                title="">8</a></td>
                                                            <td className="day">9</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="day">10</td>
                                                            <td className="day">11</td>
                                                            <td className="day">12</td>
                                                            <td className="day">13</td>
                                                            <td className="weekday">14</td>
                                                            <td className="weekday">15</td>
                                                            <td className="day">16</td>
                                                        </tr>
                                                        <tr>

                                                            <td className="day">17</td>
                                                            <td className="day">18</td>
                                                            <td className="day">19</td>
                                                            <td className="day">20</td>
                                                            <td className="weekday">21</td>
                                                            <td className="weekday">22</td>
                                                            <td className="day">23</td>

                                                        </tr>
                                                        <tr>
                                                            <td className="day">24</td>
                                                            <td className="day">25</td>
                                                            <td className="day">26</td>
                                                            <td className="day">27</td>
                                                            <td className="weekday">28</td>
                                                            <td className="weekday">29</td>
                                                            <td className="day">30</td>

                                                        </tr>
                                                        <tr>
                                                            <td className="day">31</td>
                                                            <td colSpan="6">&nbsp;</td>
                                                        </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </form>
                </section>

            </div>
        );
    }

    render() {
        if (this.state.checkDataEvent) {
            return this.renderData();
        } else {
            return this.renderEvent();
        }
    }
}

export default InfoBlock;