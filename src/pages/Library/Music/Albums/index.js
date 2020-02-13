import React from 'react';

import { Container, Title } from './styles';

export default function Albums() {
  return (
    <Container>
      <Title>Os álbuns que você curtir vão aparecer aqui</Title>
    </Container>
  );
}

Albums.navigationOptions = {
  tabBarLabel: 'Álbuns',
};
