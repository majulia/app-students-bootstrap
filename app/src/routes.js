import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index'
import Details from './pages/details/details'
import CreateUsers from './pages/createUser/createUser'
import UpdateUsers from './pages/updateUser/updateUser'
import DeleteUsers from './pages/deleteUser/deleteUser'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/users/:id" component={Details} />
      <Route path="/CriarUsuario" component={CreateUsers} />
      <Route path="/EditarUsuario/:id" component={UpdateUsers} />
      <Route path="/DeletarUsuario/:id" component={DeleteUsers} />
    </Switch>
  </BrowserRouter>
)

export default Routes;