const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const lanSchema = new Schema({
  games: [
    {
      date: Date,
      win: Boolean,
      players: [
        {
          player: { type: Schema.Types.ObjectId, ref: "Player" },
          hero: String,
        },
      ],
    },
  ],
});

const Lan = model("Lan", lanSchema);

module.exports = {
  lanSchema,
  Lan,
};
