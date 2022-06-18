const mongoose = require('mongoose');

const categorieSchema = mongoose.Schema({
    libelle:{
    type :String,
    require:true,
   },

    Categories:{
        type:[],
        require:true,
      }
});


module.exports = mongoose.model("categorie",userSchema);