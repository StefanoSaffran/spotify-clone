import { LinearGradient } from 'expo-linear-gradient';
import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const Container = styled.SafeAreaView`
  flex: 1;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
`;

export const Background = styled(LinearGradient).attrs({
  colors: ['#00B6B7', '#016565'],
})`
  flex: 1;
  border-top-right-radius: 15px;
  border-top-left-radius: 15px;
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
  font-weight: bold;
  font-size: 12px;
`;

export const PodImage = styled.Image`
  margin: 16px auto;
  width: ${Dimensions.get('window').width - 64}px;
  height: ${Dimensions.get('window').width - 80}px;
`;

export const PodTitle = styled.Text.attrs({
  numberOfLines: 1,
})`
  font-size: 24px;
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

export const Circle = styled.Text`
  position: absolute;
  right: -2px;
  top: -7px;
  color: white;
`;

export const Slider = styled.View`
  width: ${Dimensions.get('window').width - 32}px;
  background-color: white;
  border-radius: 2px;
  height: 4px;
  margin: 16px 0;
  position: relative;
`;

export const Controls = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Speed = styled.Text`
  color: rgba(255, 255, 255, 0.5);
  font-size: 15px;
`;

export const Footer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
`;
