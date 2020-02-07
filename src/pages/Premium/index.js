import React, { useState, useEffect } from 'react';
import { Animated, Dimensions } from 'react-native';

import PremiumCard from '~/components/PremiumCard';
import Dots from '~/components/Dots';

import api from '../../services/api';

import {
  Container,
  Background,
  GradientBackground,
  PremiumSlide,
  Title,
  InfoText,
  CurrentlyPlan,
  IndividualPlan,
  DuoPlan,
  StudentPlan,
  FamilyPlan,
  Header,
  Body,
  Left,
  Right,
} from './styles';

const { width } = Dimensions.get('window');

export default function Premium() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    async function loadPodcasts() {
      const { data } = await api.get('messages');
      setMessages(data);
    }
    loadPodcasts();
  }, []);

  const scrollX = new Animated.Value(0); // this will be the scroll location of our ScrollView
  // position will be a value between 0 and photos.length - 1 assuming you don't scroll pass the ends of the ScrollView
  const position = Animated.divide(scrollX, width);

  return (
    <>
      <Background>
        <Container>
          <GradientBackground />
          <Title>Curta suas musicas ao máximo com premium</Title>
          <Dots position={position} messages={messages}>
            <PremiumSlide
              onScroll={Animated.event([
                { nativeEvent: { contentOffset: { x: scrollX } } },
              ])}
              scrollEventThrottle={16}
            >
              {messages &&
                messages.map(message => (
                  <PremiumCard key={message.id} message={message} />
                ))}
            </PremiumSlide>
          </Dots>
          <InfoText>
            Infelizmente, não é possível fazer upgrade para o Premium pelo
            aplicativo.
          </InfoText>
          <CurrentlyPlan>
            <Left>Spotify grátis</Left>
            <Right>Plano atual</Right>
          </CurrentlyPlan>
          <IndividualPlan>
            <Header>Premium individual</Header>
            <Body>
              Música sem propaganda • Sem limite para pular faixas • Escute
              qualquer música • Reprodução em modo offline
            </Body>
          </IndividualPlan>
          <StudentPlan>
            <Header>Premium para Universitários</Header>
            <Body>
              Universitário paga a metade do preço • Reprodução em modo offline
              • Cancele quando quiser
            </Body>
          </StudentPlan>
          <DuoPlan>
            <Header>Premium Duo</Header>
            <Body>
              Música sem anúncios • 2 contas Premium • Cancele quando quiser
            </Body>
          </DuoPlan>
          <FamilyPlan>
            <Header>Premium Família</Header>
            <Body>
              Até 6 contas individuais • Uma cobrança simples • Todos os
              benefícios Premium • Mantenha as suas músicas salvas
            </Body>
          </FamilyPlan>
        </Container>
      </Background>
    </>
  );
}
