
const path = require('path');
const express = require('express');
const routes = require('./controllers/');
const sequelize = require('./config/connection');
const session = require('express-session');
const exphbs = require('express-handlebars');

// const routes = require('./controllers');


const app = express();
const PORT = process.env.PORT || 3001;

const SequelizeStore = require('connect-session-sequelize')(session.Store);


app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
//app.use(routes);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

const hbs = exphbs.create({
    helpers: {
        format_date: date => {
            return `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
        }
    }
});


app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
    sequelize.sync({ force: false });
});

