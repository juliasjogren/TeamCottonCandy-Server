require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { getConnection } = require("./db");

const PORT = 3000;

const app = express();
app.use(cors());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/lan", async (req, res) => {
	const db = await getConnection();

	const Lan = db.collection("Lan");

	const cursor = await Lan.find({});

	const lans = [];
	await cursor.forEach((lan) => {
		lans.push(lan);
	});

	res.send({
		lans,
	});
});

app.post("/lan", async (req, res) => {
	const db = await getConnection();

	const Lan = db.collection("Lan");
	await Lan.insertOne({
		games: [
			{
				result: "WIN!!1",
			},
		],
	});
});

app.listen(PORT, () => {
	console.log(`Example app listening at http://localhost:${PORT}`);
});
