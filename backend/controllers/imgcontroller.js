const Img = require("../models/imodel")
const asyncHandler=require('express-async-handler');
const fs = require('fs');
const path=require('path');
const retriveIMG=asyncHandler(async(req,res)=>{
    try {
        console.log(req.file);
        const name = req.body.name;
        req.body.img = fs.readFileSync(path.resolve(__dirname,'..\\..\\frontend\\src\\screens\\upload\\' + req.file.filename));
        const img = req.file.filename;
        
        console.log("imgcontrl")
        console.log(req.body);
        console.log(__dirname);
        console.log('..\\..\\images\\' + req.file.filename)
        // const photo = req.file.filename  
        const newUserData = {
            name,
            img,
        }
        console.log(newUserData);
        const newUser = new Img(newUserData);
        const createStudent = await newUser.save();
        res.status(201).send(createStudent);
        // newUser.save()
        //        .then(() => res.json(newUser))
        //        .catch(err => res.status(400).json('Error: ' + err));
        // }
        // res.send(students);
    }
      catch(err) {
        res.status(400).send({ error: err });
      }
}
)
const getIMG=asyncHandler(async(req,res)=>{
    console.log("Here1");
    console.log(req.body);
    const {name}=req.body;

    const User=await Img.findOne({name});
    
    if(User){
        res.json({
            _id:User._id,
            name:User.name,
            img:User.img,
        });
    }
    else{
        res.status(401);
        throw new Error("Invalid email or password!");
    }
});

module.exports={retriveIMG,getIMG}