const mongoose = require('mongoose');

const VideoSchema = new mongoose.Schema({id:Number,
    title:String,
    desicription:String,
    url:String,
    channel:String,
    category: String}) 

const Video = new  mongoose.model("video",VideoSchema)

module.exports ={Video}