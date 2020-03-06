const userdata = require('../models/userLogin');
const users = require('../models/userLogin');
const yourOccRoute = require('../models/yourOccRoutes');
const stateRoutes =require('../models/stateRoutes');
const sportDataR = require('../models/sportsRoutes');
const userss = require('mongodb');



exports.userData = (req,res,next)=>{
    userdata.fetchAll('5e615dd2af3dff1dae1302c0')
    .then(user =>{
      req.user = user;
      next();
      console.log(user)
    })
    .catch(err => console.log(err));
  }

exports.postUserData = (req,res,next)=>{
    const name= req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const phoneNo = req.body.phoneNo;
    const age= req.body.age;
    const UserData = new userdata(name, age, email, password,phoneNo, null,req.user._id);
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

// exports.updateData = (req,res,next)=>{
//     const name= req.body.name;
//     const email = req.body.email;
//     const password = req.body.password;
//     const phoneNo = req.body.phoneNo;
//     const age= req.body.age;
//      const UserData = new userdata(name , email, password,phoneNo,age);
//     UserData.update('5e615827b8e2b01abcc98869')
//     next();  
// };

exports.yourOccupation = (req,res,next)=>{
    const degree = req.body.degree;
    const yourOccu = new yourOccRoute(degree, null, req.user._id);
    yourOccu
    .save()
    .then(result =>{
        console.log('your occupation added');
      console.log(yourOccu)  
      console.log(req.user)  
    })
    .catch(err =>{
        console.log(err)
    });
    next();
};

exports.stateRoute = (req,res,next)=>{
    const state = req.body.state;
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
    const sportData = new sportDataR(sport);
    sportData.save().then(result =>{
        console.log('your sport added');
        console.log(sportData)
        console.log(as)
    
    })
    .catch(err =>{
        console.log(err)
    })
    next();
}