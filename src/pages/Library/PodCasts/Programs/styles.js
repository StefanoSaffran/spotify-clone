import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #121212;
`;

export const PlayList = styled.ScrollView.attrs({
  showVerticalScrollIndicator: false,
})`
  width: ${Dimensions.get('window').width - 5}px;
`;
