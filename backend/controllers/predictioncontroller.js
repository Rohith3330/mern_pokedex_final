// const predictpath = require("../models/predict");
const asyncHandler = require("express-async-handler");
const {spawn} = require("child_process");

//const x = require('../modelprediction/model.py');
const predict = asyncHandler(async(req,res) => {
try {
    
    const {name} = req.body;
    console.log(req.body);
  const childpython = spawn("python", [
    "C:\\Users\\Rohith\\mern\\backend\\modelprediction\\model.py",
    req.body.name,
  ]);
  ///Users/saivenkatpokala/Documents/pokedex/node practice/backend/controllers/predictcontroller.js
//   console.log(req);
var x;
  const something = async()=>{
      childpython.stdout.on("data", (data) => {
        console.log(`${data}`);
        x = data;
      });
      childpython.stderr.on("data", (data) => {
        console.error(`stderr: ${data}`);
      });
        childpython.on("close", (code) => {
        console.log(`child process exited with code ${code}`);
      });
      
  }
    await something();
  setTimeout(() => {
    // const arr = result.split(" ");
    // res.render("output", { label: arr[0], category: arr[1] });
    const a = JSON.parse(`{"name":"${x}"}`);
   res.status(200).send(a);
  }, 15000);
} 
catch(err) {
    res.status(400).send({ error: err });
}
});


module.exports = {predict};