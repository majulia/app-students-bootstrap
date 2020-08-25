import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Button } from 'reactstrap'
import './deleteUser.css'

import api from '../../services/services'

class deleteUser extends Component {
  constructor(props) {
    super(props)

    this.state = {
      user: {},
      redirect: false
    }
  }

  async componentDidMount() {
    const { id } = this.props.match.params
    const response = await api.get(`/users/${id}`)

    this.setState({ user: response.data })
  }

  handleDeleteClick = e => {
    const { id } = this.props.match.params

    fetch(`http://localhost:3001/sistema/users/${id}`, {
      method: "delete"
    })

      .then(data => {
        if (data.ok) {
          this.setState({ redirect: true })
        }
      })
    e.preventDefault()
  }

  render() {
    const { redirect } = this.state

    if (redirect) {
      return <Redirect to="/" />
    }
    else {
      return (
        <fieldset>
          <legend>Deletar Usuário</legend>
          <label htmlFor="nome">Nome</label>
          <h5>{this.state.user.nome}</h5>
          <label htmlFor="matricula">Matricula</label>
          <h5>{this.state.user.matricula}</h5>

          <p>Tem certeza que deseja deletar este registro?</p>

          <section className="btn-Section">
            <div className='btnP'>
            <Button color="danger" onClick={this.handleDeleteClick}>Remover</Button>
            </div>

          <div className='btnL'>
            <Link to={'/'} className="sLink">Voltar</Link>
          </div>
          </section>
        </fieldset>
      )
    }
  }
}

export default deleteUser;