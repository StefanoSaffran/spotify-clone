import styled from 'styled-components/native';
import { Platform } from 'react-native';

export const Container = styled.View`
  background: #eee;
  display: flex;
  height: auto;
  flex-direction: row;
  align-items: center;
  margin: 5px 20px;
  padding-left: 15px;
  border-radius: 4px;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  padding: 15px 10px;
  font-weight: 500;
`;
