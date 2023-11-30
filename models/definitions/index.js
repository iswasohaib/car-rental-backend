let sequelize = require("../../common/dbConnection");

let users = require("./users/users");
let categories = require("./users/categories");
let cars = require("./users/cars");
const bookings = require("./users/bookings");

categories.hasMany(cars, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "categoryId",
});
cars.belongsTo(categories, {
  onUpdate: "CASCADE",
  onDelete: "CASCADE",
  foreignKey: "categoryId",
});

const models = sequelize.models;

console.log(models);

const db = {};

db.sequelize = sequelize;

module.exports = { db, models };
