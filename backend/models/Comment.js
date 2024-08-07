//const { default: mongoose } = require('mongoose')
const mangoose=require('mongoose')

const CommentSchema = new mangoose.Schema({
    comment:{
        type:String,
        required:true,
    },
    author:{
        type:String,
        required:true,
    },
    postId:{
        type:String,
        required:true,
    },
    userId:{
        type:String,
        required:true,
    },
    
},{timestamps:true})

module.exports=mangoose.model("Comment",CommentSchema)