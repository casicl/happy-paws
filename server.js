//dependencies needed for server
const path = require('path');
const express = require("express");
const session = require("express-session");
const routes = require('./controllers');
const helpers = require("./utils/helpers");
const exphbs = require("express-handlebars");
const cloudinary = require("cloudinary");


//sequelize
const sequelize = require("./config/connection");
const SequelizeStore = require('connect-session-sequelize')(session.Store);

//express
const app = express();
const PORT = process.env.PORT || 3001;

//handlebars
const hbs = exphbs.create({helpers});



//cookies
const sess ={
    secret: "literally anything", 
    cookie: {
        maxAge: 300000,
        httpOnly: true,
        secure: false,
        sameSite: "strict",
    },
    resave: false,
    saveUninitialized: true,
    store: new SequelizeStore({
        db: sequelize,
      }),
}
app.use(session(sess));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));

app.use(express.urlencoded({extended:true}));
app.use(express.json());

app.use(routes);

sequelize.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log('Now listening'));
  });