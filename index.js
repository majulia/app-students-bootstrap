const express = require('express')
const mongoose = require('mongoose')
const requireDir = require('require-dir')
const cors = require('cors')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect('mongodb://localhost:27017/students', {useNewUrlParser: true, useUnifiedTopology: true})
console.log('Iniciando conexão ao MongoDB...');
requireDir('./src/models')

app.use('/sistema', require('./src/routes/routes'))
app.listen(3001)
console.log(`Servidor iniciado na porta 3001`);