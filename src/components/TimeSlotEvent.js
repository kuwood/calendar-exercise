import React, {PureComponent, PropTypes} from 'react';
import {EVENT_PROP_TYPE} from './constants';
import {MILLISECONDS_SECOND, SECONDS_MINUTE, MINUTES_HOUR} from '../utils/constants'

import './TimeSlotEvent.css';

export default class TimeSlotEvent extends PureComponent {
    static propTypes = {
        event: EVENT_PROP_TYPE.isRequired,
        onSelect: PropTypes.func.isRequired,
    }

    render() {
        let {
            event: {title, color, start},
            onSelect,
        } = this.props;
        let eventDate = new Date(start);
        let now = Date.now()
        let oneHour = MILLISECONDS_SECOND * SECONDS_MINUTE * MINUTES_HOUR;
        let classes = [`time-slot-event time-slot-event--${color}`];
        if (start < now) {
                classes.push(' old-event')
            if (now - start < oneHour && new Date(now).getHours() > eventDate.getHours()) {
                classes.pop()
            }
        }

        return (
            <button className={classes.join('')} onClick={onSelect}>
                {title}
            </button>
        );
    }
}
