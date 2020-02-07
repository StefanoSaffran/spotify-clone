import React, { useState, useEffect } from 'react';

import PodcastsSlide from '~/components/PodcastsSlide';

import api from '../../services/api';

import { Container, ContainerScrollView } from './styles';

export default function Main() {
  const [podcastMainList, setPodcastMainList] = useState([]);

  useEffect(() => {
    async function loadPodcasts() {
      const response = await api.get('spotifyMainList');
      setPodcastMainList(response.data);
    }
    loadPodcasts();
  }, []);

  return (
    <Container>
      <ContainerScrollView>
        {podcastMainList &&
          podcastMainList.map((item, index) => (
            <PodcastsSlide key={index} list={item} />
          ))}
      </ContainerScrollView>
    </Container>
  );
}
