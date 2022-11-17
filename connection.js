const { Module } = require('module')
const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1:27017/gamestack')

const objectdb = mongoose.connection

objectdb.on('connected', ()=>{console.log('Connected!')})
objectdb.on('error', ()=>{console.log('ERROR!')})

module.exports = mongoose