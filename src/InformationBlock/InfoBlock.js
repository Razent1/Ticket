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
                <input className={'btnData'} type="checkbox" data-on="Dates" data-off="Events" checked
                       data-toggle="toggle" data-style="slow"/>
            </div>


        );
    }
}

export default InfoBlock;