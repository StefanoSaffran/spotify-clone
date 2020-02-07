import React from 'react';

import {
  Container,
  ImageContainer,
  Image,
  TextContainer,
  Title,
  SubTitle,
} from './styles';

export default function Program({ program }) {
  return (
    <Container>
      <ImageContainer>
        <Image source={{ uri: program.image }} />
      </ImageContainer>
      <TextContainer>
        <Title>{program.title.name}</Title>
        <SubTitle>
          {program.updated_at} - {program.title.description}
        </SubTitle>
      </TextContainer>
    </Container>
  );
}
