const { Lan } = require("../db/models/lanModel");
const LanQueries = require("../db/queries/lanQueries");

async function getAllLans(req, res) {
	const lans = await LanQueries.getAllLans();

	res.send({
		lans,
	});
}

async function createLan(req, res) {
	console.log(req.body);
	const lan = {
		date: new Date(req.body.date),
		games: [],
	};
	const result = await Lan.create(lan);

	res.end();
}

module.exports = {
	getAllLans,
	createLan,
};
