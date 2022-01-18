const { Schema, model } = require("mongoose");

const playerSchema = new Schema(
	{
		name: String,
	},
	{
		collection: "Player",
	}
);

const Player = model("Player", playerSchema);

module.exports = {
	playerSchema,
	Player,
};
