import React, { useState, useEffect } from 'react';
import { Feather } from '@expo/vector-icons';

import api from '~/services/api';
import Program from '~/components/Program';

import { Container, PlayList } from './styles';

export default function Programs() {
  const [programs, setPrograms] = useState([]);

  useEffect(() => {
    async function loadPrograms() {
      const { data } = await api.get('programs');
      setPrograms(data);
    }
    loadPrograms();
  }, []);

  return (
    <Container>
      <PlayList>
        {programs &&
          programs.map((program, index) => (
            <Program key={index} program={program} />
          ))}
      </PlayList>
    </Container>
  );
}
