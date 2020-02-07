import React from 'react';

import { Container, Title } from './styles';

export default function Albuns() {
  return (
    <Container>
      <Title>Os álbuns que você curtir vão aparecer aqui</Title>
    </Container>
  );
}

Albuns.navigationOptions = {
  tabBarLabel: 'Álbuns',
};
