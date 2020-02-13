import React from 'react';
import {
  Ionicons,
  EvilIcons,
  AntDesign,
  MaterialIcons,
  Feather as Icon,
} from '@expo/vector-icons';

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
  Circle,
  Controls,
  Speed,
  Footer,
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
            <Name>Podcast FalaDev</Name>
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
          <Slider>
            <Circle>●</Circle>
          </Slider>
          <Controls>
            <Speed>1x</Speed>
            <AntDesign
              name="stepbackward"
              color="rgba(255, 255, 255, 0.5)"
              size={28}
            />
            <AntDesign name="play" color="white" size={54} />
            <AntDesign
              name="stepforward"
              color="rgba(255, 255, 255, 0.5)"
              size={28}
            />
            <Ionicons
              name="ios-moon"
              color="rgba(255, 255, 255, 0.5)"
              size={24}
            />
          </Controls>
          <Footer>
            <MaterialIcons name="devices-other" color="#ccc" size={24} />
            <EvilIcons name="share-apple" color="white" size={24} />
          </Footer>
        </InnerContainer>
      </Background>
    </Container>
  );
}
