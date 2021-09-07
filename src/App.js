import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Container } from '@material-ui/core';

import { BeerList } from './containers/BeerList/BeerList';

import { Header } from './components/Header/Header';
import { Toaster } from 'components/Toast';

function App() {
  return (
    <>
      <Toaster />

      <Router>
        <Container>
          <Header />
          <Switch>
            <Route path="/">
              <BeerList />
            </Route>
          </Switch>
        </Container>
      </Router>
    </>
  );
}

export default App;
