const mongoose = require("mongoose");

const OrderSchema = require("../schemas/OrdersSchemas");

const OrdersModel = mongoose.model("Orders", OrderSchema);

module.exports = OrdersModel;