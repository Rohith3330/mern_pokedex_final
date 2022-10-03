const user=require('../models/usermodel');
const asyncHandler=require('express-async-handler');
const generateToken = require('../util/generateToken');

const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;
    const userExists= await user.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error("user already exists");
    }
    const User =await user.create(
        {
            name,
            email,
            password,
            pic
        }
    );
    if(User){
        res.status(201).json({
            _id:User._id,
            name:User.name,
            email:User.email,
            isAdmin:User.isAdmin,
            token:generateToken(User._id),
            pic:User.pic
        });
    }else{
        res.status(400);
        throw new Error("error occured");
    }
});

const authUser=asyncHandler(async(req,res)=>{
    console.log("Here");
    console.log(req.body);
    const {email,password}=req.body;

    const User=await user.findOne({email});
    
    if(User && (await User.matchPassword(password))){
        res.json({
            _id:User._id,
            name:User.name,
            email:User.email,
            isAdmin:User.isAdmin,
            token:generateToken(User._id),
            pic:User.pic,
        });
    }
    else{
        res.status(400);
        throw new Error("Invalid email or password!");
    }
});
module.exports= {registerUser,authUser};