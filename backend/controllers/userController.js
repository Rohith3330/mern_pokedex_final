const user=require('../models/usermodel');
const asyncHandler=require('express-async-handler');
const generateToken = require('../util/generateToken');
const retriveUser=asyncHandler(async(req,res)=>{
    try {
        const students = await user.find();
        console.log("here1");
        // console.log(students);  
        res.send(students);
      } catch(err) {
        res.status(400).send({ error: err });
      }
}
    )
const registerUser=asyncHandler(async(req,res)=>{
    console.log("Here");
    console.log(req.body);
    const {name,email,password,pic,roll,branch} = req.body;
    const userExists= await user.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error("user already exists");
    }
    const User =await user.create({name,email,password,pic,roll,branch});
    if(User){
        res.status(201).json({
            _id:User._id,
            name:User.name,
            email:User.email,
            isAdmin:User.isAdmin,
            token:generateToken(User._id),
            pic:User.pic,
            roll:User.roll,
            branch:User.branch
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
        res.status(401);
        throw new Error("Invalid email or password!");
    }
});
const getuserbyid=asyncHandler(async(req,res)=>{
    try{
        console.log(req.params);
        const {id}=req.params;
        const ind=await user.findById({_id:id});
        console.log(ind);
        res.json(ind);
    }
    catch(error){
        throw new Error("No user found");
    }
});
module.exports= {registerUser,authUser,retriveUser,getuserbyid};