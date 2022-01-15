const { MongoClient } = require("mongodb");

let client = null;
let db = null;

const {
	SERVER_IP,
	DB_NAME,
	DB_USER,
	DB_PASS,
} = process.env;

const URI =
`mongodb://${DB_USER}:${DB_PASS}@${SERVER_IP}:27017/${DB_NAME}?retryWrites=true&writeConcern=majority`;

async function getConnection() {
	client = new MongoClient(URI);

	await client.connect();
	console.log("DB connected");
	db = client.db(DB_NAME);

	return db;
	// finally {
	//   await client.close(); // Ensures that the client will close when you finish/error
	// }
}

module.exports = {
	getConnection,
	client,
  db,
};
