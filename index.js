const express= require('express');
const morgan=require('morgan');
const parser=require('body-parser');

const app=express();
const port=4000;

app.use(morgan('dev'));
app.use(parser.json());
app.use(parser.urlencoded({extended:true}));
const mongoose=require('mongoose');
mongoose.connect("mongodb+srv://gabbar329:municipality@cluster0-718ce.mongodb.net/userdatabase?retryWrites=true")

app.use('*',function(req,res,next){
    res.set('Access-Control-Allow-Origin','*');
    res.set('Access-Control-Allow-Headers','content-type');

        next();    
        
        });


//app.get('/',function(req,res){
   //res.send("Hello World2").status(200);



// const document='/home/rishav/Desktop/loginpage/index.html';
// const uid=document.getElementById('uid');
// console.log(uid.value);


//res.send("Hello World1");
//res.sendFile('/home/rishav/Desktop/loginpage/index.html');
//res.sendfile('/home/rishav/Desktop/loginpage/index.html').status(200);



//})


const user=require('./routes/userpage');
const login=require('./routes/login');
const signup=require('./routes/signup');


app.use('/login',login);
app.use('/signup',signup);
app.use('/userpage',user);




app.listen(port,function(){
    console.log("Server listening on port "+port);
});
