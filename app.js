const express = require('express');
const morgan = require('morgan');
const app = express();
const { db } = require('./models');
const wikiRouter = require('./routes/wiki');
// const userRouter = require('./routers/user');
const port = 3000;

//Sequelize
db.authenticate().
then(() => {
  console.log('connected to the database');
});
//parser
app.use(express.urlencoded({extended: false}));

//Middleware
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', wikiRouter);

app.get('/', (req, res, next) => {
    res.redirect('Wiki');
});
//ServerStart
const init = async () => {
    await db.sync({force: true});
    app.listen(port, () => {
        console.log(`Server is listening at ${port}/`);
    });
};

init();
