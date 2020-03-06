const path = require('path');
const userdata = require('./models/userLogin');
const express = require('express');
const expressHBS = require('express-handlebars');
const bodyParser = require('body-parser');
const mongoConnect = require('./util/database').mongoConnect;

const app = express();

// app.engine('hbs', expressHBS({
//     layoutsDir: 'views',
//     defaultLayout:'',
//     extname: 'hbs'
// }));
app.set('view engine', 'hbs');
app.set('views', 'views');

const userRoutes = require('./routes/user');
const errorController = require('./controllers/error');


app.use((req,res,next)=>{
    userdata.fetchAll('5e615dd2af3dff1dae1302c0')
    .then(user =>{
      req.user = user;
      next();
      console.log(user)
    })
    .catch(err => console.log(err));
  }
)

app.use(express.json());
app.use(bodyParser.json());

app.use(userRoutes);

mongoConnect ( (userRoutes) =>{
    app.listen(3001);
    console.log('app is connectd to database')
});