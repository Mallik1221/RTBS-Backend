const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/bookingController');

router.post('/create', bookingController.createBooking);
router.get('/list', bookingController.getBookings);
router.delete('/delete/:id', bookingController.deleteBooking);

module.exports = router;