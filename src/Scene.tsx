import React, {useState} from 'react';
import {
  ViroARScene,
  ViroNode,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroImage,
} from '@viro-community/react-viro';

ViroARTrackingTargets.createTargets({
  qrCode: {
    source: require('./qr-code.jpg'),
    orientation: 'Up',
    physicalWidth: 0.035,
  },
});

const Scene = () => {
  const [isTracking, setIsTracking] = useState(false);

  const onInitialized = (state: any) => {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setIsTracking(true);
    } else if (state === ViroConstants.TRACKING_LIMITED) {
      setIsTracking(true);
    } else if (state === ViroConstants.TRACKING_UNAVAILABLE) {
      setIsTracking(false);
    }
  };

  const getNoTrackingUI = () => {
    return <ViroText text="No Tracking" />;
  };

  const getARScene = () => {
    return (
      <ViroNode>
        <ViroARImageMarker target={'qrCode'}>
          <ViroNode key="rnLogo" opacity={1} position={[0, 0, 0]}>
            <ViroImage
              height={0.1}
              width={0.1}
              source={require('./rnLogo.png')}
            />
          </ViroNode>
        </ViroARImageMarker>
      </ViroNode>
    );
  };

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {isTracking ? getARScene() : getNoTrackingUI()}
    </ViroARScene>
  );
};

export default Scene;
