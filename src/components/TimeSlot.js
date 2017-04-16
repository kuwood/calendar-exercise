import React, {PureComponent, PropTypes} from 'react';
import {EVENTS_PROP_TYPE} from './constants';
import {getDisplayHour} from '../utils';
import TimeSlotEvent from './TimeSlotEvent';

import './TimeSlot.css';

export default class TimeSlot extends PureComponent {
    static propTypes = {
        hour: PropTypes.number.isRequired,
        events: EVENTS_PROP_TYPE.isRequired,
        onSelectEvent: PropTypes.func.isRequired,
    }

    _renderEvents() {
        let {events, onSelectEvent} = this.props;

        return events.map((event) => (
            <div key={event.id} className="time-slot__event">
                <TimeSlotEvent event={event} onSelect={onSelectEvent.bind(null, event.id)} />
            </div>
        ));
    }

    render() {
        // get dateDisplay split and point to hour
        // if hour is ahead of timeslot hour change opacity
        
        let {hour} = this.props;
        let displayHour = getDisplayHour(hour);
        let currentHour = new Date().getHours();
        let timeSlotEventsClassList = ["time-slot__events"]
        if (currentHour > hour) {
            timeSlotEventsClassList.push(' old-event')
        }

        return (
            <section className="time-slot">
                <span className="time-slot__hour-label">
                    {displayHour}
                </span>
                <div className={`${timeSlotEventsClassList.join('')}`}>
                    {this._renderEvents()}
                </div>
            </section>
        );
    }
}
