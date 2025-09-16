// app.js
const express = require('express');
const app = express();
const db = require("./db");
const env = require("dotenv")
env.config()
db.connectDB();
// Port configuré dans Jelastic ou port par défaut 8080
const port = process.env.PORT || 8080;

app.post('/user', (req , res)=>{
  res.send(req.body);
})
app.get('/', (req, res) => {
  res.send('Hello from Node.js on Jelastic Cloud Infomaniak!');
});

app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
