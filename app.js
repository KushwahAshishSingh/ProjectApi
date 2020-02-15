const path = require('path');
const express = require('express');
const expressHBS = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

app.engine('hbs', expressHBS({
    layoutsDir: 'views',
    defaultLayout:'',
    extname: 'hbs'
}));


app.set('view engine', 'hbs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');



app.use(express.json());
app.use(bodyParser.json());

app.use(userRoutes);
app.use(errorController.get404); 


mongoConnect ( (userRoutes) =>{
    app.listen(3002);
    console.log('app is connectd to database')
});