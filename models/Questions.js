const mongoose = require('mongoose');
const Categories = require('./Categories');
const User = require('./User');

const questionSchema = mongoose.Schema({
    title:{
        type:String,
        require:true,
    },
    contenu:{
        type:String,
        require:true,
    },
    user:{
        type:Schema.Types.ObjectId,
        ref:User,
        require:true,
    },
    date:{
        type:Date,
        default: Date.now,
    },
    Categories:{
      type:[],
      require:true,
    }
});


module.exports = mongoose.model("question",userSchema);