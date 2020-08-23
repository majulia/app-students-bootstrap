const mongoose = require('mongoose')
const mongoosePaginate = require('mongoose-paginate')


const userSchema = new mongoose.Schema({
  nome: {
    type: String,
    required: true,
    // lowercase: true,
    minlength: 3,
    maxlength: 100
  },
  matricula: {
    type: Number,
    required: true,
    min: 1,
    max: 99999,
    unique: true
  },
  ativo: {
    type: Boolean,
    default: true,
    required: true,
  },
  endereco: {
    cidade: {
      type: String,
      required: true,
      minlength: 3,
      maxlength: 100
    },
    estado: {
      type: String,
      required: true,
      minlength: 2,
      maxlength: 2
    }
  },

  registro: {
    type: Date,
    default: Date.now
  }
})

userSchema.plugin(mongoosePaginate)

mongoose.model('User', userSchema)