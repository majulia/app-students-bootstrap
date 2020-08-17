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
              <InputGroupAddon addonType="prepend" >Ativo</InputGroupAddon>
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
          <Link to={`/`}>Voltar</Link>
          <Link to={`/edit/${user._id}`}>Editar</Link>
          <Link to={`/deleteUsers/${user._id}`}>Deletar</Link>
        </section>

      </>
    )
  }
}
