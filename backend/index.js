const express=require("express");

const dotenv=require("dotenv");

const app=express();
dotenv.config();
app.get('/',(req,res)=>{
    res.send("api is running");
});
// app.get('/apr',(res,req))
const PORT=process.env.PORT || 4000

app.listen(PORT,console.log('Index stared on port'));