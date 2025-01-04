const Booking = require('../models/Booking');

exports.createBooking = async (req, res) => {
  try {
    const { name, contactNumber, email, date, time, guests } = req.body;
    
    // Check if slot is already booked
    const existingBooking = await Booking.findOne({ date, time, status: 'confirmed' });
    if (existingBooking) {
      return res.status(400).json({ message: 'This time slot is already booked' });
    }

    const newBooking = new Booking({
      name,
      contactNumber,
      email,
      date,
      time,
      guests
    });

    const savedBooking = await newBooking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ status: 'confirmed' });
    res.status(200).json(bookings);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

exports.deleteBooking = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedBooking = await Booking.findByIdAndUpdate(
      id, 
      { status: 'cancelled' }, 
      { new: true }
    );

    if (!deletedBooking) {
      return res.status(404).json({ message: 'Booking not found' });
    }

    res.status(200).json(deletedBooking);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};