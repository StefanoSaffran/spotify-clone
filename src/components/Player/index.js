import React, { useState, useMemo } from 'react';
import { Dimensions, StyleSheet } from 'react-native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import Animated from 'react-native-reanimated';
import { onGestureEvent, withSpring } from 'react-native-redash';
import { PanGestureHandler, State } from 'react-native-gesture-handler';

import MiniPlayer from '~/components/MiniPlayer';
import FullPlayer from '~/components/FullPlayer';

import { ViewTopPlayer, ViewBottomPlayer } from './styles';

const { Value, interpolate, Extrapolate } = Animated;
const { height } = Dimensions.get('window');
const TABBAR_HEIGHT = getBottomSpace() + 50;
const MINIMIZED_PLAYER_HEIGHT = 50;
const SNAP_TOP = 0;
const SNAP_BOTTOM = height - TABBAR_HEIGHT - MINIMIZED_PLAYER_HEIGHT;
const SNAP_BOTTOM_ABSOLUTE = height;
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
  const state = new Value(State.UNDETERMINED);

  const gestureHandler = onGestureEvent({
    translationY,
    state,
    velocityY,
  });

  const translateY = withSpring({
    state,
    value: translationY,
    velocity: velocityY,
    snapPoints: [SNAP_TOP, SNAP_BOTTOM_ABSOLUTE],
    config,
  });

  const opacity = interpolate(translateY, {
    inputRange: [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const opacityMinimisedPlayer = interpolate(translateY, {
    inputRange: [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
    outputRange: [1, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  const overlayOpacity = interpolate(translateY, {
    inputRange: [
      SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT * 2,
      SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT,
    ],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  /*  const translateBottomTab = interpolate(translateY, {
    inputRange: [SNAP_BOTTOM - TABBAR_HEIGHT, SNAP_BOTTOM],
    outputRange: [TABBAR_HEIGHT, 0],
    extrapolate: Extrapolate.CLAMP,
  }); */

  /*  console.log(translateY);
   */
  return (
    <>
      <PanGestureHandler {...gestureHandler}>
        <ViewTopPlayer
          style={{
            zIndex: 0,
            transform: [{ translateY }],
          }}
        >
          <FullPlayer
            onPress={() => true}
            style={{
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
            }}
          />
          <ViewBottomPlayer
            style={{
              opacity: overlayOpacity,
              backgroundColor: '#272829',
            }}
            pointerEvents="none"
          />
          <Animated.View
            style={{
              opacity,
              position: 'absolute',
              zIndex: 2,
              top: 0,
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
