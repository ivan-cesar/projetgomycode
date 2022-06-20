const mongoose = require('mongoose');
const Questions = require('./Question');
const User = require('./User');
// const Schema = mongoose.Schema
// var ObjectIdUser, ObjectIdQuestion = Schema.Types.ObjectId

const responseSchema = mongoose.Schema({
    description:{
        type:String,
        require:true,
    },
    user:{
        type:String,
        ref:User,
        require:true,
    },
    question:{
        type:String,
        ref:Questions,
        
    }
});


module.exports = mongoose.model("responses",responseSchema);