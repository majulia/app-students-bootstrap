import React, { Component } from 'react';
import api from '../../services/services'
import { Link } from 'react-router-dom'
import { InputGroup, InputGroupAddon, Input } from 'reactstrap';
import './details.css'

export default class User extends Component {
  state = {
    user: {
      nome: "",
      matricula: 0,
      ativo: "",
      endereco: {
        cidade: "",
        estado: ""
      }
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const response = await api.get(`/users/${id}`)
    this.setState({ user: response.data })
  }

  render() {
    const { user } = this.state

  if (user.ativo) {
    user.ativo = "Usuário ativo"
  }else{
    user.ativo = "Usuário inativo"
  }
    return (
      <>
        <section>
          <div className="inputStyle">
            <InputGroup>
              <InputGroupAddon addonType="prepend">Nome</InputGroupAddon>
              <Input value={user.nome} disabled />
            </InputGroup>
          </div>

          <div className="inputStyle">
            <InputGroup>
              <InputGroupAddon addonType="prepend" >Matricula</InputGroupAddon>
              <Input type="number" value={user.matricula} disabled />
            </InputGroup>
          </div>

          <div className="inputStyle">
            <InputGroup>
              <InputGroupAddon addonType="prepend" >Status</InputGroupAddon>
              <Input value={user.ativo} disabled />
            </InputGroup>
          </div>


          <div className="inputStyle">
            <InputGroup>
              <InputGroupAddon addonType="prepend" >Cidade</InputGroupAddon>
              <Input value={user.endereco.cidade} disabled />
            </InputGroup>
          </div>


          <div className="inputStyle">
            <InputGroup>
              <InputGroupAddon addonType="prepend" >Estado</InputGroupAddon>
              <Input value={user.endereco.estado} disabled />
            </InputGroup>
          </div>
        </section>

        <section className="linkSection">
          <Link className="styleLink Yellow" to={`/`}>Voltar</Link>
          <Link className="styleLink Green" to={`/EditarUsuario/${user._id}`}>Editar</Link>
          <Link className="styleLink" to={`/DeletarUsuario/${user._id}`}>Deletar</Link>
        </section>

      </>
    )
  }
}
