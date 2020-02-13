import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import api from '~/services/api';

import {
  Container,
  PlayList,
  Item,
  ImageContainer,
  Image,
  TextContainer,
  ItemText,
  ItemSubText,
} from './styles';

export default function Playlists() {
  const [profile, setProfile] = useState([]);

  useEffect(() => {
    async function loadProfile() {
      const { data } = await api.get('profile');
      setProfile(data);
    }
    loadProfile();
  }, []);

  return (
    <Container>
      <PlayList>
        <Item>
          <ImageContainer>
            <Feather name="plus" size={24} color="#eee" />
          </ImageContainer>
          <ItemText>Criar playlist</ItemText>
        </Item>
        <Item>
          <ImageContainer>
            <Image source={{ uri: profile && profile.image }} />
          </ImageContainer>
          <TextContainer>
            <ItemText>Descobertas da semana</ItemText>
            <ItemSubText>Feita para {profile && profile.name}</ItemSubText>
          </TextContainer>
        </Item>
      </PlayList>
    </Container>
  );
}
