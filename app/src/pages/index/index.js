import React, { Component } from 'react';
import api from '../../services/services'
import { Link } from 'react-router-dom'
import './index.css'
import { Button, ListGroup, ListGroupItem } from 'reactstrap';

export default class Users extends Component {
  state = {
    users: [],
    usersInfo: {},
    page: 1
  }

  componentDidMount() {
    this.loadUsers()
  }

  loadUsers = async (page = 1) => {
    const response = await api.get(`/users?page=${page}`)
    const { docs, ...usersInfo } = response.data
    this.setState({ users: docs, usersInfo, page })
  }

  prevPage = () => {
    const { page } = this.state
    if (page === 1) return

    const pageNumber = page - 1
    this.loadUsers(pageNumber)
  }

  nextPage = () => {
    const { page, usersInfo } = this.state
    if (page === usersInfo.pages) return

    const pageNumber = page + 1
    this.loadUsers(pageNumber)
  }

  render() {
    const { users, usersInfo, page } = this.state

    return (
      <div className="usuario-list">
        <ListGroup flush>
          {this.state.users.map(user => (
            <ListGroupItem key={user._id}>
              <strong>{user.nome}</strong>
              <p>{user.matricula}</p>
              <Link className="linkStyle" to={`/users/${user._id}`}> Acessar
              </Link>
            </ListGroupItem>

          ))}
        </ListGroup>

        <div className="btnSection">
          <Button color="primary" size="md" disabled={page === 1} onClick={this.prevPage}> Anterior </Button> {' '}

          <Button color="danger" size="md" disabled={page === usersInfo.pages} onClick={this.nextPage}> Próxima </Button>
        </div>

      </div>
    )
  }
}