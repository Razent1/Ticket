import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './InfoBlockCss.css'


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
                                event 1
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 2
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 3
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
                            <table border={'3px'}>

                                <tr>
                                    <th colSpan={'7'}>HALL 1<br/>NOVEMBER:</th>
                                </tr>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                                <tr>
                                    <th> 1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                </tr>
                                <tr>
                                    <th> 8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>11</th>
                                    <th>12</th>
                                    <th>13</th>
                                    <th>14</th>
                                </tr>
                                <tr>
                                    <th> 15</th>
                                    <th>16</th>
                                    <th>17</th>
                                    <th>18</th>
                                    <th>19</th>
                                    <th>20</th>
                                    <th>21</th>
                                </tr>
                                <tr>
                                    <th> 22</th>
                                    <th>23</th>
                                    <th>24</th>
                                    <th>25</th>
                                    <th>26</th>
                                    <th>27</th>
                                    <th>28</th>
                                </tr>
                                <tr>
                                    <th>29</th>
                                    <th>30</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                            </table>
                        </section>
                        <section className={'credentials-form-item'}>
                            <table border={'3px'}>

                                <tr>
                                    <th colSpan={'7'}>HALL 1<br/>NOVEMBER:</th>
                                </tr>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                                <tr>
                                    <th> 1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                </tr>
                                <tr>
                                    <th> 8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>11</th>
                                    <th>12</th>
                                    <th>13</th>
                                    <th>14</th>
                                </tr>
                                <tr>
                                    <th> 15</th>
                                    <th>16</th>
                                    <th>17</th>
                                    <th>18</th>
                                    <th>19</th>
                                    <th>20</th>
                                    <th>21</th>
                                </tr>
                                <tr>
                                    <th> 22</th>
                                    <th>23</th>
                                    <th>24</th>
                                    <th>25</th>
                                    <th>26</th>
                                    <th>27</th>
                                    <th>28</th>
                                </tr>
                                <tr>
                                    <th>29</th>
                                    <th>30</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                            </table>
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
                                event 1
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 2
                            </div>
                        </section>
                        <section className="credentials-form-item">
                            <div>
                                event 3
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
                            <table border={'3px'}>

                                <tr>
                                    <th colSpan={'7'}>HALL 1<br/>NOVEMBER:</th>
                                </tr>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                                <tr>
                                    <th> 1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                </tr>
                                <tr>
                                    <th> 8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>11</th>
                                    <th>12</th>
                                    <th>13</th>
                                    <th>14</th>
                                </tr>
                                <tr>
                                    <th> 15</th>
                                    <th>16</th>
                                    <th>17</th>
                                    <th>18</th>
                                    <th>19</th>
                                    <th>20</th>
                                    <th>21</th>
                                </tr>
                                <tr>
                                    <th> 22</th>
                                    <th>23</th>
                                    <th>24</th>
                                    <th>25</th>
                                    <th>26</th>
                                    <th>27</th>
                                    <th>28</th>
                                </tr>
                                <tr>
                                    <th>29</th>
                                    <th>30</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                            </table>
                        </section>
                        <section className={'credentials-form-item'}>
                            <table border={'3px'}>

                                <tr>
                                    <th colSpan={'7'}>HALL 1<br/>NOVEMBER:</th>
                                </tr>
                                <tr>
                                    <th>S</th>
                                    <th>M</th>
                                    <th>T</th>
                                    <th>W</th>
                                    <th>T</th>
                                    <th>F</th>
                                    <th>S</th>
                                </tr>
                                <tr>
                                    <th> 1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                    <th>6</th>
                                    <th>7</th>
                                </tr>
                                <tr>
                                    <th> 8</th>
                                    <th>9</th>
                                    <th>10</th>
                                    <th>11</th>
                                    <th>12</th>
                                    <th>13</th>
                                    <th>14</th>
                                </tr>
                                <tr>
                                    <th> 15</th>
                                    <th>16</th>
                                    <th>17</th>
                                    <th>18</th>
                                    <th>19</th>
                                    <th>20</th>
                                    <th>21</th>
                                </tr>
                                <tr>
                                    <th> 22</th>
                                    <th>23</th>
                                    <th>24</th>
                                    <th>25</th>
                                    <th>26</th>
                                    <th>27</th>
                                    <th>28</th>
                                </tr>
                                <tr>
                                    <th>29</th>
                                    <th>30</th>
                                    <th>1</th>
                                    <th>2</th>
                                    <th>3</th>
                                    <th>4</th>
                                    <th>5</th>
                                </tr>
                            </table>
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