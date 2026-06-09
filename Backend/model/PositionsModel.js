const mongoose = require("mongoose");

const PositionSchema = require("../schemas/PositionsSchemas");

const PositionsModel = mongoose.model("Positions", PositionSchema);

module.exports = PositionsModel;