import React from 'react';

import { Feather } from '@expo/vector-icons';
import { Container, TextInput } from './styles';

export default function Input({ placeholder }) {
  return (
    <Container>
      <Feather
        name="search"
        size={24}
        color="#111"
        style={{ fontWeight: 'normal' }}
      />
      <TextInput placeholder={placeholder} placeholderTextColor="#000" />
    </Container>
  );
}
