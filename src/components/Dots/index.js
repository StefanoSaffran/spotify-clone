import React from 'react';
import { View, Animated, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export default function Dots({ messages, children, position }) {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width, height: 150 }}>{children}</View>
      <View style={{ flexDirection: 'row' }}>
        {messages.map((_, i) => {
          const opacity = position.interpolate({
            inputRange: [i - 1, i, i + 1],
            outputRange: [0.3, 1, 0.3],
            extrapolate: 'clamp',
          });
          return (
            <Animated.View
              key={i}
              style={{
                opacity,
                height: 7,
                width: 7,
                backgroundColor: '#fff',
                margin: 6,
                marginTop: 10,
                borderRadius: 5,
              }}
            />
          );
        })}
      </View>
    </View>
  );
}
