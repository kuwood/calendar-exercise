const _HOUR_DISPLAY_MAP = [
    '12AM', '1AM', '2AM', '3AM', '4AM', '5AM', '6AM', '7AM', '8AM', '9AM', '10AM', '11AM',
    '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM', '7PM', '8PM', '9PM', '10PM', '11PM',
]

const _DATE_DAY_MAP = [
    'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
]

const _DATE_MONTH_MAP = [
    'January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September',
    'October', 'November', 'December'
]

/**
 * Given a list of events and a date, filter the events down to those that
 * fall on the same day as the date
 * @param {array} events - List of event objects
 * @param {Date} timestamp - The timestamp representing the day to match
 * @returns {array}
 */
export const filterEventsByDay = (events, timestamp) => {
    // TODO: Implement day filtering!
    
    return events.filter(event => {
        let eventDate = new Date(event.start)
        let targetDate = new Date(timestamp)
        return eventDate.getFullYear() === targetDate.getFullYear() &&
               eventDate.getMonth() === targetDate.getMonth() &&
               eventDate.getDate() === targetDate.getDate()
    })
}

/**
 * Given a list of events and an hour number, filter the events down to those that
 * start on the specified hour
 * @param {array} events - List of event objects
 * @param {number} hour - The hour to match (0 - 23)
 * @param {array}
 * @returns {array}
 */
export const filterEventsByHour = (events, hour) => (
    events.filter(({start}) => (
        new Date(start)).getHours() === hour
    )
);

/**
 * Given a numerical timestamp, returns the formatted date string w/o time component
 * @param {number} timestamp - The date to format
 * @returns {string} The formatted date
 */
export const getDisplayDate = (timestamp) => {
    let date = new Date(timestamp);
    let day = _DATE_DAY_MAP[date.getDay()]
    let month = _DATE_MONTH_MAP[date.getMonth()]
    // TODO: Format the date like: "Tuesday, April 11, 2017"
    return `${day}, ${month} ${date.getDate()}, ${date.getFullYear()}`
};

/**
 * Given an hour number, returns a display string version
 * @param {number} hour - The hour
 * @returns {string}
 */
// TODO: Implement using a more programmatic approach instead of map
export const getDisplayHour = (hour) => _HOUR_DISPLAY_MAP[hour]

/**
 * Given a list of events, returns the event object whose id matches the specified eventId
 * @param {array} events - List of event objects
 * @param {number} eventId - ID of event to find
 * @returns {object}
 */
export const getEventFromEvents = (events, eventId) => (
    events.find(({id}) => id === eventId)
)
