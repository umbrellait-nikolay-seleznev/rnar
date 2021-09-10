import React, { useCallback, useState } from "react";
import {
  ViroNode,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroImage,
  ViroAnimations,
} from "@viro-community/react-viro";
import { Linking } from "react-native";

const qrCodeImage = require("../../assets/images/anchors/appleEventqr.png");
const appleEventImage = require("../../assets/images/content/appleEvent.jpeg");

ViroARTrackingTargets.createTargets({
  appleEvent: {
    source: qrCodeImage,
    orientation: "Up",
    physicalWidth: 0.15,
  },
});

ViroAnimations.registerAnimations({
  scaleModel: {
    properties: { scaleX: 1, scaleY: 1, scaleZ: 1 },
    duration: 1000,
  },
});

const AppleEvent = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  const onPosterPress = useCallback(() => {
    Linking.openURL("https://www.apple.com/ru/apple-events/");
  }, []);

  return (
    <ViroNode>
      <ViroARImageMarker
        target="appleEvent"
        onAnchorFound={() => setRunAnimation(true)}
      >
        <ViroNode
          key="rnCommunity"
          opacity={1}
          scale={[0, 0, 0]}
          rotation={[-90, 0, 0]}
          position={[0, -0.1, 0]}
          animation={{ name: "scaleModel", run: runAnimation }}
        >
          <ViroImage
            height={0.25}
            width={0.25}
            source={appleEventImage}
            onClick={onPosterPress}
          />
        </ViroNode>
      </ViroARImageMarker>
    </ViroNode>
  );
};

export default AppleEvent;
