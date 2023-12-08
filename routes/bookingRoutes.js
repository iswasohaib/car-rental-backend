const express = require("express");
const bookingController = require("../controllers/bookingController");

const router = express.Router();

router.get("/bookings", bookingController.getAllBookings);
router.get("/bookings/:id", bookingController.getBookingById);
router.post("/bookings", bookingController.createBooking);
router.delete("/bookings/:id", bookingController.deleteBooking);

module.exports = router;
