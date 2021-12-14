const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Car = sequelize.define("subscribers", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  city:DataTypes.STRING,
});

//create table if not exists...
const init = async () => {
  await subscribers.sync();
};

init();

module.exports = Car;