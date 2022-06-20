const mongoose = require('mongoose');

const categorieSchema = mongoose.Schema({
    libelle:{
    type :String,
    require:true,
   },
   questions:{
    type:[],
   }
});


module.exports = mongoose.model("categories",categorieSchema);