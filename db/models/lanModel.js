const { ObjectId } = require("mongodb");
const { Schema, model } = require("mongoose");

const lanSchema = new Schema(
	{
		date: Date,
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
	},
	{
		collection: "Lan",
	}
);

const Lan = model("Lan", lanSchema);

module.exports = {
	lanSchema,
	Lan,
};
