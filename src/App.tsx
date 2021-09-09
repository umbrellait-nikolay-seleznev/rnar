import React from 'react';
import { ViroARSceneNavigator } from '@viro-community/react-viro';

import { HomeScreen } from "./screens";

const App = () => {
  return <ViroARSceneNavigator initialScene={{ scene: HomeScreen }} apiKey="" />;
};

export default App;
