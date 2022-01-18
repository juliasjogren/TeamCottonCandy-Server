const { Player } = require("../models/playerModel");

async function getAllPlayers() {
  const players = await Player.find();

  return players;
}

module.exports = {
  getAllPlayers,
};
