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
  ViroFlexView,
} from "@viro-community/react-viro";
import RNCommunity from "src/components/RNCommunity";
import { CatScene } from "src/components/Cat";
import PortalScene from "./PortalScene";

import { styles } from "./HomeScreen.styles";

const qrCodeImage = require("../../assets/images/anchors/qr-code.png");
const rnLogoImage = require("../../assets/images/content/rnLogo.png");

ViroARTrackingTargets.createTargets({
  qrCode: {
    source: qrCodeImage,
    orientation: "Up",
    physicalWidth: 0.177,
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
    <>
      <ViroNode>
        <ViroARImageMarker
          target="qrCode"
          onAnchorFound={() => setRunAnimation(true)}
        >
          <ViroFlexView
            opacity={1}
            position={[-0.8, -1.8, -1.15]}
            rotation={[-90, 0, 0]}
          >
            <ViroImage
              height={0.75}
              width={0.8}
              source={rnLogoImage}
              animation={{ name: "animateLogo", loop: true, run: runAnimation }}
            />
            <ViroText
              color="#03A7D2"
              style={styles.text}
              text="React Native is awesome!"
              textAlign="center"
              textAlignVertical="bottom"
              textLineBreakMode="None"
              position={[0, -0.2, 0]}
              width={60}
            />
          </ViroFlexView>
        </ViroARImageMarker>
      </ViroNode>
      <RNCommunity />
      <PortalScene />
      <CatScene />
    </>
  );

  return (
    <ViroARScene onTrackingUpdated={onInitialized}>
      {isTracking ? getARScene() : getNoTrackingUI()}
    </ViroARScene>
  );
};

export default Scene;
