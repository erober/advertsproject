const express= require('express');
const router=express.Router(); 

const mongoose=require('mongoose');

const userModel =require('../models/signupModel');
const bcryptjs=require('bcryptjs');

const path=require('path');

router.post('/',function(req,res){

   

    
//res.sendFile('/home/rishav/Desktop/loginpage/user.html');

console.log(req.body);

if((req.body.Email)&&(req.body.pass))
    {
    userModel.find({email:req.body.Email})
    .exec()
    .then(users=>{
        if(users.length>0)
    {   console.log(users[0].pass);

        if(users[0].pass==req.body.pass)
       {
        //res.send("hello");
        res.sendFile(path.join(__dirname+'/user.html')).status(200);
        }

       else {
           res.send("Wrong Password");
       }
    }
    else{
        
        res.send("Account doesn't exists").status(400);
    }
    
    })
    
    }
    else {
        res.send("Fields Empty.Please Retry.")
    }
})
  
router.get('/' , function(req,res){
res.send(

   userModel.find({})
    .exec()
   
)
})



module.exports= router;