import React, { useState } from 'react';
import Header from '../../components/header'
import { Filters } from '../../components/filters'
import GridSneakers from '../../components/gridSneakers'
import { Container } from 'native-base';
import { ScrollView } from 'react-native-gesture-handler';

function Home() {

  const [border, setBorder] = useState(false);

  const handleScroll = (event: Object) => {
    if (event.nativeEvent.contentOffset.y > 54) {      
      setBorder(true)
    }
    else {      
      setBorder(false)
    }
  }

  return (
    <Container >
      <Header border={border} />
      <ScrollView onScroll={handleScroll} >
        <Filters />
        <GridSneakers />
      </ScrollView>
    </Container>
  );
}

export default Home