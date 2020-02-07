import React from 'react';
import { View } from 'react-native';

import { Container, Card, Free, Premium, Header, Body } from './styles';

export default function PremiumCard({ message }) {
  return (
    <Container>
      <Card>
        <Free>
          <Header>Grátis</Header>
          <Body>{message.free}</Body>
          <View />
        </Free>
        <Premium>
          <Header>Premium</Header>
          <Body>{message.premium}</Body>
          <View />
        </Premium>
      </Card>
    </Container>
  );
}
