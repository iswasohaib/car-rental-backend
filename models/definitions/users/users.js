const { DataTypes } = require("sequelize");
let sequelize = require("../../../common/dbConnection");
const users = sequelize.define(
  "users",
  {
    id: {
      primaryKey: true,
      autoIncrement: true,
      type: DataTypes.INTEGER,
    },
    firstName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    lastName: {
      allowNull: true,
      type: DataTypes.STRING,
    },
    email: {
      unique: true,
      allowNull: false,
      type: DataTypes.STRING,
      validate: { isEmail: true },
    },
    password: {
      allowNull: false,
      type: DataTypes.STRING,
    },
  },
  {
    timestamps: true,
    paranoid: true,
    sequelize,
    modelName: "users",
  }
);
module.exports = users;
