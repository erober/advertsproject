const express= require('express');
const router=express.Router(); 

const mongoose=require('mongoose');

const signupModel =require('../models/signupModel');
const bcryptjs=require('bcryptjs');



router.post('/',function(req,res){

   
    console.log(req.body);
    
    // loginModel.find({UserName:req.body.UserName})
    // .exec()
    // .then(users=>{
    //     if(users.length>0)
    // {
       //res.send("Sign Up").status(200);
    // }
    // else{
        
    //     res.send("Account not Created").status(400);
    // }
    
    // })

    const newUser= new signupModel(
        {
            _id:new mongoose.Types.ObjectId(),
            name:req.body.name,
            email:req.body.email,
            pass:req.body.pass,
            

        }
    );
    
       signupModel.find({name:req.body.name})
       .exec()
       .then(user=>{
           if(user.length>0)
           {
               res.send("Userid is taken.Try a different one");
           }
           else{

       

    signupModel.find({email:req.body.email})
    .exec()
    .then(users=>{
        if(users.length>0)
    {
        res.send("Email already registered").status(400);
    }
    else{
       
       if((req.body.name)&&(req.body.email)&&(req.body.pass))
        {newUser.save();
        //res.links('./login.html');
         res.send("Account Created").status(201);}
         else{
             res.send("Fields Empty");
         }
    }
    
    })
    
    
}
})

    
     })



module.exports= router;