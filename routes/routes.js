const PlayerRoutes = require("./playerRoutes");
const LanRoutes = require("./lanRoutes");

function registerRoutes(app) {
	app.get("/player", PlayerRoutes.getAllPlayers);

	app.get("/lan", LanRoutes.getAllLans);
	app.post("/lan", LanRoutes.createLan);
	app.put("/lan", LanRoutes.addGameToLan);
}

module.exports = {
	registerRoutes,
};
