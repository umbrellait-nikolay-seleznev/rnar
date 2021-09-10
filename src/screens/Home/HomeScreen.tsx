import React, { useState } from "react";
import {
  ViroARScene,
  ViroNode,
  ViroText,
  ViroConstants,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroImage,
  ViroAnimations,
} from "@viro-community/react-viro";
import { CatScreen } from "..";

const qrCodeImage = require("../../assets/images/anchors/qr-code.jpg");
const rnLogoImage = require("../../assets/images/content/rnLogo.png");
const catImage = require("../../assets/images/anchors/cat.png");

ViroARTrackingTargets.createTargets({
  qrCode: {
    source: qrCodeImage,
    orientation: "Up",
    physicalWidth: 0.035,
  },
  cat: {
    source: catImage,
    orientation: "Up",
    physicalWidth: 0.035,
  },
});

ViroAnimations.registerAnimations({
  animateLogo: {
    properties: {
      rotateZ: 360,
    },
    easing: "Linear",
    duration: 4000,
  },
});

const Scene = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [runAnimation, setRunAnimation] = useState(false);

  const onInitialized = (state: any) => {
    if (state === ViroConstants.TRACKING_NORMAL) {
      setIsTracking(true);
    } else if (state === ViroConstants.TRACKING_LIMITED) {
      setIsTracking(true);
    } else if (state === ViroConstants.TRACKING_UNAVAILABLE) {
      setIsTracking(false);
    }
  };

  const getNoTrackingUI = () => <ViroText text="No Tracking" />;

  const getARScene = () => (
    <ViroNode>
      <ViroARImageMarker
        target="qrCode"
        onAnchorFound={() => setRunAnimation(true)}
      >
        <ViroNode
          key="rnLogo"
          opacity={1}
          scale={[0.8, 0.8, 0.8]}
          position={[0, 0, 0]}
          rotation={[0, 0, 0]}
          animation={{ name: "animateLogo", loop: true, run: runAnimation }}
        >
          <ViroImage height={0.1} width={0.1} source={rnLogoImage} />
        </ViroNode>
      </ViroARImageMarker>

      <ViroARImageMarker
        target="cat"
        onAnchorFound={() => setRunAnimation(true)}
      >
        <ViroNode
          key="cat"
          opacity={1}
          scale={[0.5, 0.5, 0.5]}
          position={[0, 0, -70]}
          rotation={[0, 180, 0]}
        >
          <CatScreen />
        </ViroNode>
      </ViroARImageMarker>
    </ViroNode>
  );

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {isTracking ? getARScene() : getNoTrackingUI()}
    </ViroARScene>
  );
};

export default Scene;
