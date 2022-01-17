const PlayerQueries = require("../db/queries/playerQueries");

async function getAllPlayers(req, res) {
  const players = await PlayerQueries.getAllPlayers();

  res.send({
    players,
  });
}

module.exports = {
  getAllPlayers,
};
