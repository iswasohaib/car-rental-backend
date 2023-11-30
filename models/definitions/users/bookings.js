const { DataTypes } = require("sequelize");

let sequelize = require("../../../common/dbConnection");

const bookings = sequelize.define(
  "bookings",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },

    totalAmount: { type: DataTypes.INTEGER },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "bookings",
  }
);

module.exports = bookings;
