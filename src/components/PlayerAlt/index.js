import React from 'react';
import { Dimensions, StyleSheet, Easing } from 'react-native';
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
const config = {
  damping: 15,
  mass: 1,
  stiffness: 150,
  overshootClamping: false,
  restSpeedThreshold: 0.1,
  restDisplacementThreshold: 0.1,
};

export default function Player() {
  const translateY = new Animated.Value(0);

  let offset = 0;

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true }
  );

  function onHandlerStateChanged(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      const opened = false;
      const { translationY } = event.nativeEvent;

      offset += translationY;
    }
    /* if (translationY >= 100) {
        opened = true;
      } else {
        translateY.setValue(offset);
        translateY.setOffset(0);
        offset = 0;
      }

      Animated.timing(translateY, {
        toValue: opened ? 300 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? SNAP_BOTTOM : SNAP_TOP;
        translateY.setOffset(offset);
        translateY.setValue(SNAP_TOP);
      });
    } */
  }

  const opacity = translateY.interpolate({
    inputRange: [SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT, SNAP_BOTTOM],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const overlayOpacity = translateY.interpolate({
    inputRange: [
      SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT * 2,
      SNAP_BOTTOM - MINIMIZED_PLAYER_HEIGHT,
    ],
    outputRange: [0, 1],
    extrapolate: Extrapolate.CLAMP,
  });

  const translateBottomTab = translateY.interpolate({
    inputRange: [SNAP_BOTTOM - TABBAR_HEIGHT, SNAP_BOTTOM],
    outputRange: [TABBAR_HEIGHT, 0],
    extrapolate: Extrapolate.CLAMP,
  });

  return (
    <>
      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChanged}
      >
        <ViewTopPlayer
          style={{
            transform: [
              {
                translateY: translateY.interpolate({
                  inputRange: [-350, SNAP_TOP, SNAP_BOTTOM],
                  outputRange: [-50, SNAP_TOP, SNAP_BOTTOM],
                  extrapolate: 'clamp',
                }),
              },
            ],
          }}
        >
          {offset !== SNAP_BOTTOM && (
            <FullPlayer
              onPress={() => true}
              style={{ borderTopLeftRadius: 5, borderTopRightRadius: 5 }}
            />
          )}
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
              zIndex: 100,
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
