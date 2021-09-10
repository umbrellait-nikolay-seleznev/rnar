import React, { useState } from "react";
import {
  ViroNode,
  ViroText,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroImage,
  ViroAnimations,
} from "@viro-community/react-viro";

const qrCodeImage = require("../../assets/images/anchors/mikeTarget.png");
const rnCommunityImage = require("../../assets/images/content/iwantyou.png");

ViroARTrackingTargets.createTargets({
  qrCodeCommunity: {
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

const RNCommunity = () => {
  const [runAnimation, setRunAnimation] = useState(false);

  return (
    <ViroNode>
      <ViroARImageMarker
        target="qrCodeCommunity"
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
          <ViroImage height={0.5} width={0.5} source={rnCommunityImage} />
          <ViroText
            text="I want you for the React Native Community"
            textAlign="center"
            textAlignVertical="bottom"
            textLineBreakMode="WordWrap"
            color="#000000"
            width={5}
            height={3}
            scale={[0.1, 0.1, 0.3]}
            style={{
              fontFamily: "Arial",
              fontSize: 50,
              backgroundColor: "yellow",
              color: "#000000",
            }}
            position={[0, -0.25, 0]}
          />
        </ViroNode>
      </ViroARImageMarker>
    </ViroNode>
  );
};

export default RNCommunity;
