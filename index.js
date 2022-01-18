require("dotenv").config();
const express = require("express");
const cors = require("cors");

const { getConnection } = require("./db/db");
const { registerRoutes } = require("./routes/routes");

const PORT = 3000;

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
	res.send("Hello World!");
});

registerRoutes(app);

app.listen(PORT, () => {
	console.log(`TeamCottonCandy server listening at http://localhost:${PORT}`);
	getConnection();
});
