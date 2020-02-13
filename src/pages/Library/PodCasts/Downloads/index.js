import React from 'react';
import { Feather } from '@expo/vector-icons';

import { Container, Title, SubTitle, Button, ButtonText } from './styles';

export default function Downloads() {
  return (
    <Container>
      <Title>Nenhum download por enquanto</Title>
      <SubTitle>
        Toque em <Feather name="arrow-down-circle" size={15} color="#ccc" /> em
        um episódio para ouvi-lo sem conexão.
      </SubTitle>
      <Button>
        <ButtonText>Explorar podcasts</ButtonText>
      </Button>
    </Container>
  );
}
