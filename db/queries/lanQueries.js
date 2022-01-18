const { Lan } = require("../models/lanModel");

async function getAllLans() {
  const lans = await Lan.find({}).populate("games.players.player").exec();

  return lans;
}

module.exports = {
  getAllLans,
};
