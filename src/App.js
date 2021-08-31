import './App.css';

import React from 'react';
import { Grid, Container } from '@material-ui/core';

import { Item } from './components/Item/Item';
import { Header } from './components/Header/Header';
import data from './data.json';

function App() {
  const sortData = data.items.sort((a, b) => {
    return b.rating - a.rating;
  });

  return (
    <div className="App">
      <Container>
        <Header />
        <Grid container spacing={2} alignItems="stretch">
          {sortData.map((item) => (
            <Grid item key={item.title} style={{ display: 'flex' }}>
              <Item data={item} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}

export default App;
