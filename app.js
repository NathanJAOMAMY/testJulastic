// app.js
const express = require("express");
const app = express();
const db = require("./db");
const env = require("dotenv");
const Users = require("./model");
env.config();
db.connectDB();
// Port configuré dans Jelastic ou port par défaut 8080
const port = process.env.PORT || 8080;

app.get("/user", async (req, res) => {
  try {
    const users = await Users.find().select("-password"); // Ne pas renvoyer les passwords
    res.status(200).json(users);
  } catch (err) {
    res.status(500).json({ message: "Erreur serveur", error: err });
  }
});
app.post("/user", (req, res) => {
  res.send(req.body);
});
app.get("/", (req, res) => {
  res.send("Hello from Node.js on Jelastic Cloud Infomaniak!");
});

app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
