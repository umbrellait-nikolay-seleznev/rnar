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
import PortalScene from "./PortalScene";

const qrCodeImage = require("../../assets/images/anchors/qr-code.jpg");
const rnLogoImage = require("../../assets/images/content/rnLogo.png");

ViroARTrackingTargets.createTargets({
  qrCode: {
    source: qrCodeImage,
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
          position={[0, 0, 0]}
          animation={{ name: "animateLogo", loop: true, run: runAnimation }}
        >
          <ViroImage height={0.1} width={0.1} source={rnLogoImage} />
        </ViroNode>
      </ViroARImageMarker>
      <PortalScene />
    </ViroNode>
  );

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {isTracking ? getARScene() : getNoTrackingUI()}
    </ViroARScene>
  );
};

export default Scene;
