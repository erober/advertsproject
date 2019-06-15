const mongoose=require('mongoose');
const signupSchema=mongoose.Schema(
    {
        _id: mongoose.Schema.Types.ObjectId,
        name:{
            type:String,require:true,unique:true
        },
        email:{
            type:String,require:true,unique:true
        },
        pass:{
            type:String,require:true
        },
        // password2:{
        //     type:String,require:true
        // },
        
    
    }
)

module.exports=mongoose.model('signups',signupSchema)