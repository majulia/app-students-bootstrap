import React from 'react';
import Header from './components/header/header'
import { Container } from 'reactstrap';
import Routes from './routes';

export default function App() {
  return (
    <div className="App">
      <Header />
      <Container>
      <Routes />
      </Container>
    </div>
  );
}