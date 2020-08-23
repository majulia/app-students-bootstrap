import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Index from './pages/index/index'
import Details from './pages/details/details'
import CreateUsers from './pages/createUser/createUser'
import UpdateUsers from './pages/updateUser/updateUser'

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Index} />
      <Route path="/users/:id" component={Details} />
      <Route path="/CriarUsuario" component={CreateUsers} />
      <Route path="/EditarUsuario/:id" component={UpdateUsers} />
    </Switch>
  </BrowserRouter>
)

export default Routes;