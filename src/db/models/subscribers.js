const { DataTypes } = require("sequelize");

const sequelize = require("../sequelize");

const Subscribers = sequelize.define("Subscribers", {
  name: {type:DataTypes.STRING},
  email:{type:DataTypes.STRING,unique:true},
  phone: {type:DataTypes.INTEGER},
  city:DataTypes.STRING,
},
{timestamps:false});

//create table if not exists...
const init = async () => {
  await Subscribers.sync();
};

init();

module.exports = Subscribers;