const mongoose = require("mongoose");

const {
  SERVER_IP,
  DB_NAME,
  DB_USER,
  DB_PASS,
} = process.env;

const URI = `mongodb://${DB_USER}:${encodeURIComponent(DB_PASS)}@${SERVER_IP}:27017/${DB_NAME}?retryWrites=true&writeConcern=majority`;

async function getConnection() {
  try {
    console.log('Attempting to connect to ', URI)
    await mongoose.connect(URI);
    console.log("DB connected");
  } catch (error) {
    console.warn(error)
  }
}

module.exports = {
  getConnection,
};
