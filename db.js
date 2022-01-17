const { MongoClient } = require("mongodb");

const {
  SERVER_IP,
  DB_NAME,
  DB_USER,
  DB_PASS,
} = process.env;

const URI = `mongodb://${DB_USER}:${encodeURIComponent(DB_PASS)}@${SERVER_IP}:27017/${DB_NAME}?retryWrites=true&writeConcern=majority`;
const client = new MongoClient(URI);
let db = null;

async function getConnection() {
  try {
    console.log('Attempting to connect to ', URI)
    await client.connect();
    console.log("DB connected");
    db = client.db(DB_NAME);
  
    return db;
  } catch (error) {
    console.warn(error)
  }
}

module.exports = {
  getConnection,
  client,
  db,
};
