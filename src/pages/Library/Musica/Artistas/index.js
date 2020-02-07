import React from 'react';

import { Container, Title, Button, ButtonText } from './styles';

export default function Musicas() {
  return (
    <Container>
      <Title>Os artistas que você seguir vão aparecer aqui</Title>
      <Button>
        <ButtonText>Escolher Artistas</ButtonText>
      </Button>
    </Container>
  );
}
