require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const HoldingsModel = require("./model/HoldingModel");
const PositionsModel = require("./model/PositionsModel");
const OrdersModel = require("./model/OrdersModel");
const UserModel = require("./model/UserModel");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  app.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await UserModel.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const newUser = new UserModel({
      name,
      email,
      password,
    });

    await newUser.save();

    res.json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: "Signup failed" });
  }
});

  await newOrder.save();

  res.send("Order saved!");
});

app.listen(PORT, async () => {
  console.log("App started!");

  await mongoose.connect(uri);
  console.log("DB started!");
});