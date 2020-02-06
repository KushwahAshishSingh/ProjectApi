const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const expressHBS = require('express-handlebars');
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


app.use(bodyParser.urlencoded({extended: false}));



app.use('/user',userRoutes);
//app.use(errorController.get404); 

mongoConnect ( () =>{
    app.listen(3000);
    console.log('app is connectd to database')
});