const express=require('express');
const router = express.Router();

const mongoose=require('mongoose');
const path=require('path');

const signupModel =require('../models/signupModel');




router.get('/',function(req,res){

res.sendFile(path.join(__dirname+'/userpage.html')).status(200);

})



module.exports= router;