import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
import { getBottomSpace } from 'react-native-iphone-x-helper';

const TABBAR_HEIGHT = getBottomSpace() + 50;

export const Container = styled.View``;

export const ViewTopPlayer = styled(Animated.View).attrs({})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #0b3057;
`;

export const ViewBottomPlayer = styled(Animated.View)`
  position: absolute;
  height: 50px;
  left: 0;
  right: 0;
  top: 0;
  bottom: ${TABBAR_HEIGHT}px;
`;
