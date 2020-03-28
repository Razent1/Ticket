import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import '../styles/AllEventCss.css';

class Event extends React.Component {

    render() {
        return (
            <div>
                <div className="col-sm-12">
                    <div className="row">
                        <div className="array col">
                            <div className="row">
                                <div className="concertPic col-sm-3">
                                    <img className="concertJpg" src="../public/img/2020-02-24%2021.04.53.jpg"
                                         alt=""/>
                                </div>
                                <div className="col-sm-4">
                                    <div className="progress">
                                        <div className="progress-bar progress-bar-striped progress-bar-animated"
                                             role="progressbar" style={{width: "75%"}}
                                             aria-valuenow="5" aria-valuemin="0" aria-valuemax="100">
                                            75% sold out
                                        </div>
                                    </div>
                                    <h1>Lady Gaga</h1>
                                    <p>Word Tour</p>
                                </div>
                                <div className=" date2 col-sm-3 align-self-start">
                                    <p>2 January</p>
                                    <p>Hall 2</p>
                                    <p>18:00</p>
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