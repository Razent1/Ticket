import React from 'react';
import 'jquery';
import 'bootstrap';

class EventCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <img src={require('public/ev1.png')}/>
            </div>
        );
    }
}


export default EventCard;