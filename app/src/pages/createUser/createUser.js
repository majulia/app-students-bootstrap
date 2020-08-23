import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom'
import { Form, FormGroup, Label, Input, Col, Row, Button, } from 'reactstrap';
import './createUser.css'

class createUser extends Component {
  constructor() {
    super()

    this.state = {
      user: {
        nome: "",
        matricula: 0,
        ativo: "true",
        endereco: {
          cidade: "",
          estado: ""
        }
      },
      redirect: false
    }
  }

  handleInputChange = e => {
    const target = e.target
    const name = target.name
    const value = target.value

    this.setState(prevState => ({
      user: { ...prevState.user, [name]: value }
    }))
  }

  handleInputChangeEndereco = e => {
    const target = e.target
    const name = target.name
    const value = target.value

    this.setState(prevState => {
      const user = { ...prevState.user }
      user.endereco[name] = value
      return { user }
    })
  }

  handleSubmit = e => {
    fetch("http://localhost:3001/sistema/users", {
      method: "post",
      body: JSON.stringify(this.state.user),
      headers: {
        "Content-Type": "application/json"
      }
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
      return <Redirect to='/' />
    } else {
      return (
        <Form onSubmit={this.handleSubmit} className="form-style">
          <fieldset>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Nome</Label>
                  <Input type="text" name="nome" id="nome" placeholder="insira o seu nome" minLength="3" maxLength="100" required value={this.state.user.nome} onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Matricula</Label>
                  <Input type="number" name="matricula" id="matricula" placeholder="insira sua matricula" minLength="1" maxLength="99999" value={this.state.user.matricula} onChange={this.handleInputChange} />
                </FormGroup>
              </Col>
            </Row>
            <Row form>
              <Col md={6}>
                <FormGroup>
                  <Label>Cidade</Label>
                  <Input type="text" name="cidade" id="cidade" placeholder="Ex: São Paulo" minLength="3" maxLength="100" value={this.state.user.cidade} onChange={this.handleInputChangeEndereco} />
                </FormGroup>
              </Col>
              <Col md={6}>
                <FormGroup>
                  <Label>Estado</Label>
                  <Input type="text" name="estado" id="estado" placeholder="Ex: SP" minLength="2" maxLength="2" value={this.state.user.estado} onChange={this.handleInputChangeEndereco} />
                </FormGroup>
              </Col>
            </Row>

            <FormGroup check>
              <Label check>

                <Input type="radio" name="ativo" value="true"
                  checked={this.state.user.ativo === "true"}
                  onChange={this.handleInputChange} />
                Ativo {' '}
              </Label>
            </FormGroup>

            <FormGroup check>
              <Label check>

                <Input type="radio" name="ativo" value="false" checked={this.state.user.ativo === "false"} onChange={this.handleInputChange} />
                Inativo{' '}
              </Label>
            </FormGroup>

            <div className="sectionBtn">
              <Button type="submit" color="info">Cadastrar</Button>
              {' '}
              <Link to={'/'} className="linkVoltar">Voltar</Link>
            </div>
          </fieldset >
        </Form >
      )
    }
  }
}

export default createUser;
