const express = require('express')
const router = express.Router()

const mongoose = require('mongoose')
const schema = mongoose.Schema

const gameSchema = new schema({
    tittle: String,
    genre: String,
    classification: String,
    idgame: String
})

const GameModel = mongoose.model('games', gameSchema)
module.exports = router

router.post('/addgame', (req, res) => {
    const newgame = new GameModel({
        tittle: req.body.tittle,
        genre: req.body.genre,
        classification: req.body.classification,
        idgame: req.body.idgame
    })
    newgame.save(function(err){
        if(!err){
            res.send('Game Added!')
        }else{
            res.send(err)
        }
    })
})

router.get('/gamelist', (req, res) => {
    GameModel.find({}, function(docs, err){
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/getdatagame', (req, res) => {
    GameModel.find({idgame:req.body.idgame}, function(docs, err) {
        if(!err){
            res.send(docs)
        }else{
            res.send(err)
        }
    })
})

router.post('/updategame', (req, res) => {
    GameModel.findOneAndUpdate({idgame:req.body.idgame}, {
        tittle: req.body.tittle,
        genre: req.body.genre,
        classification: req.body.classification
    }, (err) => {
        if(!err){
            res.send('Game Updated!')
        }else{
            res.send(err)
        }
    })
})

router.post('/deletegame', (req, res) => {
    GameModel.findOneAndDelete({idgame:req.body.idgame}, (err) => {
        if(!err){
            res.send('Game Deleted!')
        }else{
            res.send(err)
        }
    })
})