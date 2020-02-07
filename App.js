import React from 'react';
import { StatusBar, YellowBox } from 'react-native';
import Routes from '~/routes';
import Player from '~/components/Player';

YellowBox.ignoreWarnings([
  'Unrecognized WebSocket',
  'VirtualizedLists should never be nested', // TODO: Remove when fixed
]);

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#111" />
      <Routes />
      {/* <Player /> */}
    </>
  );
}
