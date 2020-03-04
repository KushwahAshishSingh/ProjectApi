const userdata = require('../models/userLogin');
const yourOccRoute = require('../models/yourOccRoutes');
const stateRoutes =require('../models/stateRoutes');
const sportDataR = require('../models/sportsRoutes');

exports.postUserData = (req,res,next)=>{
    const name= req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNo = req.body.phoneNo;
    const age= req.body.age;
    const UserData = new userdata(name, age, email, password,phoneNo);
    UserData
    .save()
    .then(result =>{
        console.log('user created');
        console.log(UserData)
    })
    .catch(err =>{
        console.log(err);
     });
    next();  
};

exports.yourOccupation = (req,res,next)=>{
    const occup = req.body.ocup;
    const yourOccu = new yourOccRoute(occup);
    console.log('hi')
    console.log(req.body)
    yourOccu
    .save()
    .then(result =>{
        console.log('your occupation added');
        console.log(yourOccu)
        
    })
    .catch(err =>{
        console.log(err)
    });
    next();
};

exports.stateRoute = (req,res,next)=>{
    const state = "ashish";
    const stateRoutess = new stateRoutes(state);
    stateRoutess.save().then(result =>{
        console.log('your state added');
        console.log(stateRoutess)
        
    })
    .catch(err =>{
        console.log(err)
    })
    next();
}

exports.sportData = (req,res,next)=>{
    const sport= req.body.sport;
    const sportData = new sportDataR(as);
    sportData.save().then(result =>{
        console.log('your sport added');
        console.log(sportData)
        console.log(as)
        // this.stateRoute();
        // this.yourOccupation();
    })
    .catch(err =>{
        console.log(err)
    })
    next();
}