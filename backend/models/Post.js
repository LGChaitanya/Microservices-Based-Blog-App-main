//const { default: mongoose } = require('mongoose')
const mangoose=require('mongoose')

const PostSchema = new mangoose.Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    desc:{
        type:String,
        required:true,
        unique:true
    },
    photo:{
        type:String,
        required:false,
    },
    username:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    categories:{
        type:Array,
    },
    
},{timestamps:true})

module.exports=mangoose.model("Post",PostSchema)