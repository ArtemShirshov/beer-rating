import './App.css';

import React from 'react';
import { Container } from '@material-ui/core';

import { Header } from './components/Header/Header';
import { BeerItems } from './components/BeerItems/BeerItems';

function App() {
  return (
    <>
      <Container>
        <Header />

        <BeerItems />
      </Container>
    </>
  );
}

export default App;
