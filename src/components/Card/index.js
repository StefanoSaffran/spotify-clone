import React from 'react';

import {
  Container,
  PodImage,
  ContainerSubtitle,
  Subtitle,
  Description,
} from './styles';

export default function Card({ item }) {
  return (
    <Container>
      <PodImage source={{ uri: item.image }} />
      <ContainerSubtitle>
        <Subtitle>{item.subtitle.title}</Subtitle>
        <Description>{item.subtitle.description}</Description>
      </ContainerSubtitle>
    </Container>
  );
}
