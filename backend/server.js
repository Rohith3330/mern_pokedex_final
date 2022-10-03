const express=require("express");

const dotenv=require("dotenv");

const connectDB=require("./config/db");

const userRoutes =require('./routes/userroute');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

const app=express();
app.use(express.json());
dotenv.config();
connectDB();
app.get('/',(req,res)=>{
    res.send("api is running");
});
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
const PORT=process.env.PORT || 4000

app.listen(PORT,console.log('Index stared on port'));