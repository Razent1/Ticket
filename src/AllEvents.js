import React from "react";
import 'bootstrap/dist/css/bootstrap-grid.min.css';

class AllEvents extends React.Component {

    render() {
        return (
            <div>
                <section className="container-fluid">
                    <div className="col">
                        {/*<div className="row">*/}
                        {/*    <div className="col-sm-3">*/}
                        {/*    </div>*/}
                        {/*    <div className="col-sm-9">*/}
                        {/*        <div className="row">*/}
                        {/*            <div className="col-sm-7">f</div>*/}
                        {/*            <div className="col-sm">Date</div>*/}
                        {/*            <div className="col-sm-align-self-end">Hall</div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                    </div>
                    <div className="col">
                        <div className="row">
                            {/*<div className="col-sm-3">*/}
                            {/*    g*/}
                            {/*</div>*/}
                            <div className="array col-sm-9">
                                <div className="row">
                                    <div className="concertPic col-sm">
                                        <img className="concertJpg" src="img/2020-02-24%2021.04.53.jpg" alt=""/>
                                    </div>
                                    <div className="col-sm">
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated"
                                                 role="progressbar"
                                                 aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"
                                                 >75% sold
                                                out
                                            </div>
                                        </div>
                                        <h1>Lady Gaga</h1>
                                        <p>Word Tour</p>
                                    </div>
                                    <div className=" date2 col-sm-2 align-self-start">
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
                    </div>
                </section>
            </div>
        )
    }

}

export default AllEvents;