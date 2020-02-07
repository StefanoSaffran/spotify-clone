import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #272829;
  border-top-color: #ccc;
  border-top-width: 2px;
`;

export const Left = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Image = styled.Image`
  height: 48px;
  width: 48px;
`;

export const NameContainer = styled.View`
  margin-left: 10px;
`;

export const Name = styled.Text`
  color: white;
  font-size: 11px;
`;
