const mongoose = require('mongoose');
const Questions = require('./Questions');
const User = require('./User');

const responseSchema = mongoose.Schema({
    description:{
        type:String,
        require:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:User,
        require:true,
    },
    question:{
        type:Schema.Types.ObjectId,
        ref:Questions,
        
    }
});


module.exports = mongoose.model("response",userSchema);