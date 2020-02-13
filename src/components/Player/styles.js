import styled from 'styled-components/native';
import Animated from 'react-native-reanimated';
/* import { getBottomSpace } from 'react-native-iphone-x-helper';

const TABBAR_HEIGHT = getBottomSpace() + 50; */

export const ViewTopPlayer = styled(Animated.View).attrs({})`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: #00b6b7;
  /*   border-top-right-radius: 15px;
  border-top-left-radius: 15px; */
`;
