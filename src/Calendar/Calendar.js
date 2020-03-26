import React from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

class Cal extends React.Component {
    state = {
        date: new Date(),
    }

    onChange = date => this.setState({date});

    render() {
        return (

                <Calendar onChange={this.onChange}
                          onClickDay={(value, event) => alert('Clicked day: ', value)}
                          value={this.state.date}
                          calendarType={'Hebrew'}
                          locale={"eng"}/>

        );
    }
}

export default Cal;

