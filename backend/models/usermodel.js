const mongoose =require('mongoose');
const bcrypt=require('bcryptjs');

const UserSchema =mongoose.Schema(
    {
        name:{
            type: String,
            required:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false,
        },
        pic:{
            type:String,
            required:true,
            default:
                "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png"
        },
        roll:{
            type:String,
            required:true,
        },
        branch:{
            type:String,
            required:true,
        },
    },
    {
        timestamps:true,
    }
);
UserSchema.pre("save",async function(next){
    if(!this.isModified('password')){
        next();
    }
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
});
UserSchema.methods.matchPassword= async function(enteredPassword){
    return await bcrypt.compare(enteredPassword,this.password);
};

const user=mongoose.model('user',UserSchema);
module.exports=user;