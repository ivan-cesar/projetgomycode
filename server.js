const express = require('express');
const app = express();
require('dotenv').config({path:'./config.env'});
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Question = require("./models/Question.js");
const Categorie = require('./models/Categorie.js');
const Reponse = require('./models/Reponse.js');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const db ="mongodb+srv://mozart:mozart225@cluster0.frpo6.mongodb.net/PROJECT0?retryWrites=true&w=majority"
// Connexion à la base de données-------------------------------
mongoose.connect(db)
.then(()=>console.log("db connecté"))
.catch(err=>console.log(err))

// Ajouter une question----------------------------------------
app.post("/question/add", async(req,res)=>{
    try{
        // const question = Question.create(req.body);
        const question = new Question();
        question.title = req.body.title;
        question.contenu = req.body.contenu;
        let category;
        for (let index = 0; index < req.body.categories.length; index++) {
            category = await Categorie.findById(req.body.categories[index])
            question.categories.push(category);          
        } 
        await question.save();
        res.status(201).json({message: "Question ajouter avec succès"})
    }catch(error){
        res.status(500).json(error);
        console.log(error)
    }
});
// Afficher toutes les questions----------------------------------------

app.get("/questions",async (req,res)=>{
    try{
        const questions = await  Question.find({});
        res.status(201).json(questions);
    }catch(error){
        res.status(500).json(error);
        console.log('erreur')

    }
});
// Afficher une question en fonction de son Id----------------------------------------
app.get("/question/:id",async (req,res)=>{
    try{
        
       const question = await  Question.findById(req.params.id);
        console.log(question);
        res.status(201).json(question);
    }catch(error){
        res.status(500).json(error);
        console.log('erreur')

    }
});
app.get("/categories",async (req,res)=>{
    try{
        
       const categories = await  Categorie.find();
        console.log(categories);
        res.status(201).json(categories);
    }catch(error){
        res.status(500).json(error);
        console.log('erreur')

    }
});
// Ajouter une reponse---------------------------------------

// Supprimer une question----------------------------------------
// app.delete("/question/:id",async (req,res)=>{
//     try{await Question.findOneAndDelete({_id:req.params.id})
//     res.status(201).json({message:"suppression effectué succès"});}
//     catch(error){ 
//         res.status(500).send(error);
//     }
// });
// Modifier une question----------------------------------------

// app.put("/question/:id",async (req,res)=>{
//     try{
//         const updateQuestion = await Question.findOneAndUpdate(
//             {_id: req.params.id},
//             {$set: req.body}
//         );
//         if(!updateQuestion){
//             res.status(404).send("non trouvé");
//         }
//         res.status(201).json({message: "modifaction effectué succès"});

//     }catch(error){
//         res.status(500).send(error);
//     }
// });

const port = process.env.PORT || 3000

app.listen(port,function(){
    console.log('le port est ', port);
})