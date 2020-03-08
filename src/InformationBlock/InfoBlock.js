import React from 'react';
import './InfoBlockCss.css';
import 'jquery';
import 'bootstrap';

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
            <div>
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
                            <div>
                                <img src="../img/ev1.png" alt="event"/>
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                <img src="../img/ev2.png" alt="event"/>
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                <img src="../img/ev3.png" alt="event"/>
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
                                    <div className="span12">
                                        <table className="table-condensed table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th colSpan="7">
                                                    <a className="btn">HALL 1 <br/>February </a>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="muted">29</td>
                                                <td className="muted">30</td>
                                                <td className="muted">31</td>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>7</td>
                                                <td>8</td>
                                                <td>9</td>
                                                <td>10</td>
                                                <td>11</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>13</td>
                                                <td>14</td>
                                                <td>15</td>
                                                <td>16</td>
                                                <td>17</td>
                                                <td>18</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td><strong>20</strong></td>
                                                <td>21</td>
                                                <td>22</td>
                                                <td>23</td>
                                                <td>24</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>27</td>
                                                <td>28</td>
                                                <td>29</td>
                                                <td className="muted">1</td>
                                                <td className="muted">2</td>
                                                <td className="muted">3</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={'credentials-form-item'}>
                            <div className="container">
                                <div className="row">
                                    <div className="span12">
                                        <table className="table-condensed table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th colSpan="7">
                                                    <a className="btn"><i className="icon-chevron-left"></i></a>
                                                    <a className="btn">HALL 2 <br/>February </a>
                                                    <a className="btn"><i className="icon-chevron-right"></i></a>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="muted">29</td>
                                                <td className="muted">30</td>
                                                <td className="muted">31</td>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>7</td>
                                                <td>8</td>
                                                <td>9</td>
                                                <td>10</td>
                                                <td>11</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>13</td>
                                                <td>14</td>
                                                <td>15</td>
                                                <td>16</td>
                                                <td>17</td>
                                                <td>18</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td><strong>20</strong></td>
                                                <td>21</td>
                                                <td>22</td>
                                                <td>23</td>
                                                <td>24</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>27</td>
                                                <td>28</td>
                                                <td>29</td>
                                                <td className="muted">1</td>
                                                <td className="muted">2</td>
                                                <td className="muted">3</td>
                                            </tr>
                                            </tbody>
                                        </table>
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
            <div>
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
                            <div>
                                <img src="../img/ev1.png" alt="event"/>
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                <img src="../img/ev2.png" alt="event"/>
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                <img src="../img/ev3.png" alt="event"/>
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
                                        <table className="table-condensed table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th colSpan="7">
                                                    <a className="btn">HALL 1 <br/>February </a>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="muted">29</td>
                                                <td className="muted">30</td>
                                                <td className="muted">31</td>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>7</td>
                                                <td>8</td>
                                                <td>9</td>
                                                <td>10</td>
                                                <td>11</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>13</td>
                                                <td>14</td>
                                                <td>15</td>
                                                <td>16</td>
                                                <td>17</td>
                                                <td>18</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td><strong>20</strong></td>
                                                <td>21</td>
                                                <td>22</td>
                                                <td>23</td>
                                                <td>24</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>27</td>
                                                <td>28</td>
                                                <td>29</td>
                                                <td className="muted">1</td>
                                                <td className="muted">2</td>
                                                <td className="muted">3</td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                        <section className={'credentials-form-item'}>
                            <div className="container">
                                <div className="row">
                                    <div className="span12">
                                        <table className="table-condensed table-bordered table-striped">
                                            <thead>
                                            <tr>
                                                <th colSpan="7">
                                                    <a className="btn"><i className="icon-chevron-left"></i></a>
                                                    <a className="btn">HALL 2 <br/>February </a>
                                                    <a className="btn"><i className="icon-chevron-right"></i></a>
                                                </th>
                                            </tr>
                                            <tr>
                                                <th>Su</th>
                                                <th>Mo</th>
                                                <th>Tu</th>
                                                <th>We</th>
                                                <th>Th</th>
                                                <th>Fr</th>
                                                <th>Sa</th>
                                            </tr>
                                            </thead>
                                            <tbody>
                                            <tr>
                                                <td className="muted">29</td>
                                                <td className="muted">30</td>
                                                <td className="muted">31</td>
                                                <td>1</td>
                                                <td>2</td>
                                                <td>3</td>
                                                <td>4</td>
                                            </tr>
                                            <tr>
                                                <td>5</td>
                                                <td>6</td>
                                                <td>7</td>
                                                <td>8</td>
                                                <td>9</td>
                                                <td>10</td>
                                                <td>11</td>
                                            </tr>
                                            <tr>
                                                <td>12</td>
                                                <td>13</td>
                                                <td>14</td>
                                                <td>15</td>
                                                <td>16</td>
                                                <td>17</td>
                                                <td>18</td>
                                            </tr>
                                            <tr>
                                                <td>19</td>
                                                <td><strong>20</strong></td>
                                                <td>21</td>
                                                <td>22</td>
                                                <td>23</td>
                                                <td>24</td>
                                                <td>25</td>
                                            </tr>
                                            <tr>
                                                <td>26</td>
                                                <td>27</td>
                                                <td>28</td>
                                                <td>29</td>
                                                <td className="muted">1</td>
                                                <td className="muted">2</td>
                                                <td className="muted">3</td>
                                            </tr>
                                            </tbody>
                                        </table>
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