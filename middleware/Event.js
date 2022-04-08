const Event = require('../../models/event');


 Event.pre('cancelEvent', function(next) {
    // Remove all the assignment docs that reference the removed person.
    this.model('Booking').remove({ event: this._id }, next);
});

export default Event;