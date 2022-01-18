const { Schema, model } = require("mongoose");

const playerSchema = new Schema({
  name: String,
});

const Player = model("Player", playerSchema);

module.exports = {
  playerSchema,
  Player,
};
