import React from 'react';
import { AntDesign, Feather as Icon } from '@expo/vector-icons';

import {
  Container,
  Background,
  InnerContainer,
  Header,
  Button,
  Name,
  PodImage,
  PlayerView,
  PodTitle,
  PodAuthor,
  Metadata,
  Slider,
  Controls,
} from './styles';

export default function FullPlayer({ onPress }) {
  return (
    <Container>
      <Background>
        <InnerContainer>
          <Header>
            <Button {...{ onPress }}>
              <Icon name="chevron-down" color="white" size={24} />
            </Button>
            <Name>FalaDev</Name>
            <Button {...{ onPress }}>
              <Icon name="more-horizontal" color="white" size={24} />
            </Button>
          </Header>
          <PodImage source={require('~/../assets/fala-dev.jpeg')} />
          <Metadata>
            <PlayerView>
              <PodTitle>FalaDev #12 - Boas práticas no front-end</PodTitle>
              <PodAuthor>Podcast FalaDev</PodAuthor>
            </PlayerView>
          </Metadata>
          <Slider />
          <Controls>
            <Icon name="shuffle" color="rgba(255, 255, 255, 0.5)" size={24} />
            <AntDesign name="stepbackward" color="white" size={32} />
            <AntDesign name="play" color="white" size={48} />
            <AntDesign name="stepforward" color="white" size={32} />
            <Icon name="repeat" color="rgba(255, 255, 255, 0.5)" size={24} />
          </Controls>
        </InnerContainer>
      </Background>
    </Container>
  );
}
