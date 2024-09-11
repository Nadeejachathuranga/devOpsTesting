const Mongoose= require("mongoose");
const Schema =Mongoose.Schema;

const UserModelSchema =new Schema({
    "name": {
        require:true,
        type:String,
        unique:true,
        index:true
    },
    "email": {
        require:true,
        type:String
    },
    "contact number": {
        require:true,
        type:Number
    },
    "password": {
        require:true,
        type:String
    }
})

const user=Mongoose.model("user",UserModelSchema);

module.exports= user;