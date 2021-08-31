import './App.css';

import React from 'react';
import { Container } from '@material-ui/core';

import { Header } from './components/Header/Header';
import { BeerItems } from './components/BeerItems/BeerItems';

function App() {
  return (
    <div className="App">
      <Container>
        <Header />

        <BeerItems />
      </Container>
    </div>
  );
}

export default App;
