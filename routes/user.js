const path = require('path');
const express = require('express');

const userControllers = require('../controllers/user');
const userdata = require('../models/userLogin');
const yourOcc = require('../models/yourOccRoutes');

const router = new express.Router();

router.post('/signup',userControllers.postUserData);
router.post('/userOcc', userControllers.yourOccupation);
router.post('/state', userControllers.stateRoute);
router.post('/sport', userControllers.sportData);
router.get('/userdata', userControllers.userData);
//router.post('/updateUser',userControllers.updateData);

router.get('/a',(req,res,next)=>{
    res.status(200).json({
        message: 'every thing is fine'
    })
})


router.get('/',userControllers.postUserData)

module.exports = router;