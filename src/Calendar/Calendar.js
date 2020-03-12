import React from 'react';
import Calendar from 'react-calendar';

class Cal extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({date})

    render() {
        return (
            <div>
                <Calendar onChange={this.onChange}
                          value={this.state.date}
                          calendarType={'Hebrew'}
                          locale={"eng"}/>
            </div>
        );
    }
}

export default Cal;

