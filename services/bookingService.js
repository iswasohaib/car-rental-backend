const { models } = require("../models/definitions");

const getAllBookings = async () =>
  await models.bookings.findAll({
    include: [
      {
        model: models.cars,
        attributes: ["name"],
      },
    ],
  });

const getBookingById = async (id) =>
  await models.bookings.findByPk(id, {
    include: [
      {
        model: models.cars,
        attributes: ["name"],
      },
    ],
  });

const createBooking = async (bookingData) => {
  const { carId } = bookingData;

  const car = await models.cars.findByPk(carId);

  if (!car || car.quantity === 0) {
    throw new Error("Car not available");
  }

  await models.bookings.create(bookingData);

  await models.cars.update(
    { quantity: car.quantity - 1 },
    { where: { id: carId } }
  );
};

const deleteBooking = async (id) =>
  await models.bookings.destroy({ where: { id } });

module.exports = {
  getAllBookings,
  getBookingById,
  createBooking,
  deleteBooking,
};
