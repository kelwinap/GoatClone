// components/Hello.tsx
import React from 'react';
import Header from '../../components/header'
import Filters from '../../components/filters'
import GridSneakers from '../../components/gridSneakers'
import { Container } from 'native-base';

function Home() {

  return (
    <Container >
      <Header />
      <Filters />
      <GridSneakers />
    </Container>
  );
}

export default Home