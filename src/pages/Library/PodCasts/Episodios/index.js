import React, { useState, useEffect, Fragment } from 'react';

import api from '~/services/api';
import DailyChapters from '~/components/DailyChapters';

import { Container, ChaptersList, Title } from './styles';

export default function Episodios() {
  const [chapters, setChapters] = useState([]);

  useEffect(() => {
    async function loadChapters() {
      const { data } = await api.get('chapters');
      setChapters(data);
    }
    loadChapters();
  }, []);

  return (
    <Container>
      <ChaptersList>
        {chapters &&
          chapters.map(dailyChapters => (
            <Fragment key={dailyChapters.id}>
              <Title>{dailyChapters.title}</Title>
              <DailyChapters dailyChapters={dailyChapters} />
            </Fragment>
          ))}
      </ChaptersList>
    </Container>
  );
}
