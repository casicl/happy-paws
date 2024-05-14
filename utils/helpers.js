const express = require("express");
const handlebars = require("express-handlebars");
const routes = require("../controllers");
const sequelize = require("../config/connection");
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());



sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });