const PlayerRoutes = require("./playerRoutes");
const LanRoutes = require("./lanRoutes");

function registerRoutes(app) {
  app.get("/player", PlayerRoutes.getAllPlayers);

  app.get("/lan", LanRoutes.getAllLans);
  app.post("/lan", LanRoutes.createLan);
}

module.exports = {
  registerRoutes,
};
