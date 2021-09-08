import React from 'react';
import {ViroARSceneNavigator} from '@viro-community/react-viro';

import Scene from './src/Scene';

const App = () => {
  return <ViroARSceneNavigator initialScene={{scene: Scene}} apiKey="" />;
};

export default App;
