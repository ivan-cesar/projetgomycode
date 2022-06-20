const mongoose = require('mongoose');
const Categories = require('./Categorie');
const User = require('./User');
const Schema = mongoose.Schema
const ObjectId = Schema.Types.ObjectId

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
        type:ObjectId,
        ref:User,
        require:false,
    },
    date:{
        type:Date,
        default: Date.now,
    },
    categories:{
      type:[],
      require:false,
    }
});


module.exports = mongoose.model("questions",questionSchema);