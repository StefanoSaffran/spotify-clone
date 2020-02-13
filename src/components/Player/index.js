import React from 'react';
import { Dimensions } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import { onGestureEvent, withSpring } from 'react-native-redash';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import MiniPlayer from '~/components/MiniPlayer';
import FullPlayer from '~/components/FullPlayer';

import { ViewTopPlayer } from './styles';

const { Value, interpolate, Extrapolate } = Animated;
const { height } = Dimensions.get('window');
const TABBAR_HEIGHT = getBottomSpace() + 50;
const MINIMIZED_PLAYER_HEIGHT = 50;
const TOP = 0;
// const BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT;
const BOTTOM_ABSOLUTE = height;
const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1,
};

export default function Player() {
  const translationY = new Value(0);
  const velocityY = new Value(0);
  const offset = new Value(BOTTOM_ABSOLUTE);
  const state = new Value(State.UNDETERMINED);

  const gestureHandler = onGestureEvent({
    translationY,
    state,
    velocityY,
  });

  const translateY = withSpring({
    state,
    offset,
    value: translationY,
    velocity: velocityY,
    snapPoints: [TOP, BOTTOM_ABSOLUTE],
    config,
  });

  const opacity = interpolate(translateY, {
    inputRange: [BOTTOM_ABSOLUTE - MINIMIZED_PLAYER_HEIGHT, BOTTOM_ABSOLUTE],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <PanGestureHandler {...gestureHandler}>
        <ViewTopPlayer
          style={{
            transform: [{ translateY }],
          }}
        >
          <FullPlayer onPress={() => true} />
          {/*           <ViewBottomPlayer
            style={{
              opacity: overlayOpacity,
              backgroundColor: '#272829',
            }}
            pointerEvents="none"
          /> */}
          <Animated.View
            style={{
              opacity,
              position: 'absolute',
              top: -(MINIMIZED_PLAYER_HEIGHT + TABBAR_HEIGHT - 2),
              left: 0,
              right: 0,
              height: MINIMIZED_PLAYER_HEIGHT,
            }}
          >
            <MiniPlayer />
          </Animated.View>
        </ViewTopPlayer>
      </PanGestureHandler>
    </>
  );
}
