const mongoose=require('mongoose');

const connectDB=async()=>{
    try{
        const conn=await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            useNewUrlParser:true,
            // usecreateindex:true
        })
        console.log(`Mongo db connected:${conn.connection.host}`);
    }
    catch(error){
        console.error(`error messeage ${error}`);
    }
}
module.exports=connectDB;