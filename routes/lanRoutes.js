const { Lan } = require("../db/models/lanModel");
const LanQueries = require("../db/queries/lanQueries");

async function getAllLans(req, res) {
  const lans = await LanQueries.getAllLans();

  res.send({
    lans,
  });
}

async function createLan(req, res) {
  await Lan.create({
    games: [],
  });

  res.end();
}

module.exports = {
  getAllLans,
  createLan,
};
