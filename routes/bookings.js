const express = require('express');
const router = express.Router();
const catchAsync = require('../utils/catchAsync');

const { isLoggedIn } = require('../middleware');
const bookings = require('../controllers/bookings');

router.route('/')
    .get(isLoggedIn,bookings.renderBooking)
    .post(bookings.createBooking);

router.get('/show');


module.exports = router;