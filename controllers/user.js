const userdata = require('../models/userLogin');

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
    
};

