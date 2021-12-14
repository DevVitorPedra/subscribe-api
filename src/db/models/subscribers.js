const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Subscribers = sequelize.define("subscribers", {
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  phone: DataTypes.INTEGER,
  city:DataTypes.STRING,
});

//create table if not exists...
const init = async () => {
  await Subscribers.sync();
};

init();

module.exports = Subscribers;