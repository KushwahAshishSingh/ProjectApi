const path = require('path');
const express = require('express');

const userControllers = require('../controllers/user');
const userdata = require('../models/userLogin');

const router = express.Router();

router.post('/', userControllers.postUserData);

router.get('/a',(req,res,next)=>{
    res.status(200).json({
        message: 'every thing is fine'
    })
})


router.get('/',userControllers.postUserData)
console.log('in usr routes');
module.exports =router;