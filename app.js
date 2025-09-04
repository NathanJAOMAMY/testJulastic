// app.js
const express = require('express');
const app = express();

// Port configuré dans Jelastic ou port par défaut 8080
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello from Node.js on Jelastic Cloud Infomaniak!');
});

app.listen(port, () => {
  console.log(`Server running and listening on port ${port}`);
});
