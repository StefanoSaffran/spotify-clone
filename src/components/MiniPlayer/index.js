import React from 'react';

import { MaterialIcons } from '@expo/vector-icons';
import { Container, Left, Image, NameContainer, Name } from './styles';

export default function MiniPlayer() {
  return (
    <Container>
      <Left>
        <Image
          source={{
            uri:
              'https://i.scdn.co/image/9b225b3d47d9f0a152309ae9ac7050b1370fff4d',
          }}
        />
        <NameContainer>
          <Name>FalaDev #12 - Boas práticas no front-end</Name>
          <MaterialIcons name="devices-other" color="#ccc" size={18} />
        </NameContainer>
      </Left>
      <MaterialIcons
        name="play-circle-outline"
        color="white"
        size={26}
        style={{ paddingRight: 16 }}
      />
    </Container>
  );
}
