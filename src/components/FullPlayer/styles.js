import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#0b3057', '#051c30'],
})`
  flex: 1;
`;

export const InnerContainer = styled.View`
  margin: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const Button = styled(RectButton)`
  padding: 16px;
`;

export const Name = styled.Text`
  color: white;
  padding: 16px;
`;

export const PodImage = styled.Image`
  margin: 16px 0;
  width: ${Dimensions.get('window').width - 32}px;
  height: ${Dimensions.get('window').width - 32}px;
`;

export const PodTitle = styled.Text`
  font-size: 25px;
  font-weight: bold;
  color: white;
`;

export const PlayerView = styled.View``;

export const PodAuthor = styled.Text`
  color: white;
`;

export const Metadata = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Slider = styled.View`
  width: ${Dimensions.get('window').width - 32}px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 2px;
  height: 4px;
  margin: 16px 0;
`;

export const Controls = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
`;
