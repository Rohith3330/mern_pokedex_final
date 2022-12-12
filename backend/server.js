const express=require("express");

const dotenv=require("dotenv");
const path = require("path");

const bodyparser=require("body-parser");

const connectDB=require("./config/db");

const userRoutes =require('./routes/userroute');
const { notFound, errorHandler } = require("./middleware/errorMiddleware");
const multer = require('multer');
const app=express();
app.use(bodyparser.urlencoded({extended:true}));
// app.set("view engine","ejs");
app.use(express.json());
dotenv.config();
connectDB();
app.get('/',(req,res)=>{
    res.send("api is running");
});
app.use(express.json());
var cors = require('cors');
app.use(cors({credentials: false, origin: 'http://localhost:3000'}));
app.use('/api/users',userRoutes);
app.use(notFound);
app.use(errorHandler);
app.use(express.static("build"));
console.log(__dirname);
console.log(path.join(__dirname, "/classifier_models/mod/model.json"));

app.use(
  "/api/pokeml/classify",
  express.static(path.join(__dirname, "/classifier_models/mod/model.json"))
);

app.use(
  "/api/pokeml",
  express.static(path.join(__dirname, "classifier_models/mod"))
);

const PORT=process.env.PORT || 4000

app.listen(PORT,console.log('Index stared on port '+PORT));