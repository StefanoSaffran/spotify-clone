import { LinearGradient } from 'expo-linear-gradient';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.View`
  width: ${Dimensions.get('window').width}px;
  padding-left: ${(Dimensions.get('window').width - 290) / 2}px;
`;

export const Card = styled.View`
  background-color: #333;
  width: 290px;
  height: 140px;
  border-radius: 6px;
  flex-direction: row;
  overflow: hidden;
`;

export const Body = styled.Text`
  color: #ccc;
  text-align: center;
  font-size: 19px;
  font-weight: bold;
  padding: 0 5px;
  margin-bottom: 15px;
`;

export const Header = styled.Text`
  color: #ccc;
  text-align: center;
  text-transform: uppercase;
  font-size: 11px;
  margin-top: 8px;
  letter-spacing: 1px;
`;

export const Free = styled.View`
  background-color: transparent;
  width: 145px;
  justify-content: space-between;
`;

export const Premium = styled(LinearGradient).attrs({
  colors: ['rgba(15, 173, 114, 0.5)', 'rgb(15, 173, 114)'],
  start: [0, 0],
  end: [1, 1],
})`
  width: 145px;
  justify-content: space-between;
`;
