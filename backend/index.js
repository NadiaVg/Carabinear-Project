require ('dotenv').config();

const express = require("express");
const cors = require("cors");
const jwt = require('jsonwebtoken');
const bodyParser = require('body-parser');

var path = require('path');

const app = express();


app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

var corsOptions = {
  origin: "*"
};

app.use(cors(corsOptions));

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.setHeader('Content-Type', 'application/json');
});

app.use(express.urlencoded({ extended: true }));

const db = require("./models");

db.sequelize.sync();






const PORT = process.env.PORT || 8080;

require("./routes/restaurant.routes")(app);
require("./routes/user.routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});