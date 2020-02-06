const userdata = require('../models/userLogin');

exports.postUserData = (req,res,next)=>{
    const name= require('mongodb').name;
    const email = require('mongodb').email;
    const password = userdata.password;
    const phoneNo = req.body.phoneNo;
    const age= req.body.age;
    const UserData = new userdata(name, age, email, password,phoneNo);
    UserData
    .save()
    .then(result =>{
        console.log('user created');
        
    
    })
    .catch(err =>{
        console.log(err);
    });
    
};

