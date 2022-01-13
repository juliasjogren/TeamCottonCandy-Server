const { MongoClient } = require("mongodb");

const URI =
	"mongodb://user:password@localhost:27017/TeamCottonCandy?retryWrites=true&writeConcern=majority";

async function getConnection() {
	const client = new MongoClient(URI);

	await client.connect();
	console.log("DB connected");
	const db = client.db("TeamCottonCandy");

	return db;
	// finally {
	//   await client.close(); // Ensures that the client will close when you finish/error
	// }
}

module.exports = {
	getConnection,
};
