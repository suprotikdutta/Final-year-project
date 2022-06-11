const booking = require('../models/booking');
const campground = require('../models/campground');

module.exports.renderBooking = (req, res) => {
    res.render('bookings/book');
};

module.exports.createBooking = async(req, res) => {
    const campgroundId = '62a38692147e7c3e3c589851';
    const currentUserId = '62a3915e8370e23e70239d80';
    const from = '2022-06-11';
    const to = '2022-06-18';
    const capacity = 2;

    const data = {
        fromDate: from,
        toDate: to,
        user: currentUserId,
        camp:campgroundId
    }
    const newbooking = new booking(data);
    await newbooking.save();

    let camp = await campground.findById(campgroundId);
    const campgroundCapacity = camp.capacity - capacity;
    
    const newcamp = await campground.findByIdAndUpdate(campgroundId, { capacity: campgroundCapacity });
    
    
    req.flash('success', 'Successfully Booked Campground');

    
    res.redirect("/campgrounds/campgroundId");
};

module.exports.showBooking = async(req, res) => {
    const campgroundId = '62a38692147e7c3e3c589851';
    const currentUserId = '62a3915e8370e23e70239d80';
    const from = '2022-06-11';
    const to = '2022-06-18';
    const capacity = 2;

    const ifBookingPresent = await booking.findOne({ camp: campgroundId });
    

    let camp = await campground.findById(campgroundId);

    const data = {
        fromDate: from,
        toDate: to,
        capacity:2,
        userId: currentUserId,
        campId: campgroundId,
        campName:camp.title
    }

    

    if (ifBookingPresent) {
        res.render('bookings/show', { data });
    } else {
        res.render('home', { data });
    }
    
    
    
};