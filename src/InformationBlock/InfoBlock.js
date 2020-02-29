import React from 'react';
import 'bootstrap/dist/css/bootstrap-grid.min.css';
import './InfoBlockCss.css'


class InfoBlock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div>
                <section className="form-tabs">
                    <div className="form-tabs__slider"></div>
                    <button className="form-tabs__btn form-tabs__btn_data" type="button">DATA</button>
                    <button className="form-tabs__btn form-tabs__btn_event" type="button">EVENT</button>
                </section>
            </div>


        );
    }
}

export default InfoBlock;