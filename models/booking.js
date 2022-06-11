const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
    fromDate: {
        type: Date,
        get: value => value.toDateString()
    },
    toDate: {
        type: Date,
        get: value => value.toDateString()
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    camp: {
        type: Schema.Types.ObjectId,
        ref: 'Campground'
    }
}, { timestamps: true });

module.exports = mongoose.model('Booking', bookingSchema);

