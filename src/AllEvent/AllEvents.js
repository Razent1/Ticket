import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './AllEventCss.css';

class AllEvents extends React.Component {

    render() {
        return (
            <div>
                <section className="container-fluid">
                    <div className="col">
                        <div className="array col-sm-12">
                            <div className="row">
                                <div className="concertPic">
                                    <img className="concertJpg" src="2020-02-24%2021.04.53.jpg" alt="eventPic"/>
                                </div>
                                <div className="col-sm">
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
                                <div className=" date2 col-sm align-self-start">
                                    <p>2 January</p>
                                    <p>Hall 2</p>
                                    <p>18:00</p>
                                </div>
                                <div className="col-sm align-self-end">
                                    <div className="row justify-content-end">img2</div>
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        )
    }

}

export default AllEvents;