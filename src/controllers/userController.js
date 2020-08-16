const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = {
  //Inserindo dados - Post
  async insert (req, res){
    const users = await User.create(req.body)
    return res.json(users)
  },

//Selecionando todos os dados com paginação - Get
  async selectIdAll (req, res){
    const { page } = req.query

    const users = await User.paginate({}, { page, limit: 5 })

    return res.json(users)
  },

  //Selecionando por id - Get (select id)
  async selectId (req, res){
    const users = await User.findById(req.params.id)

    return res.json(users)
  },

  //Atualizando dados - Put

  async update (req, res){
    const users = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })

    return res.json(users)
  },

  //Deletando dados - delete
  async delete (req, res){
    await User.findByIdAndRemove(req.params.id)

    return res.send('Deletado com sucesso!')
  }
}