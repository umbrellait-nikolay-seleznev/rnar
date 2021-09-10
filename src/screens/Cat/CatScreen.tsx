/* eslint-disable global-require */
import React, { useState } from "react";

import {
  ViroAnimations,
  ViroAmbientLight,
  Viro3DObject,
  ViroNode,
  ViroARTrackingTargets,
  ViroARImageMarker,
} from "@viro-community/react-viro";

const catImage = require("../../assets/images/anchors/cat.png");

ViroARTrackingTargets.createTargets({
  cat: {
    source: catImage,
    orientation: "Up",
    physicalWidth: 0.035,
  },
});

ViroAnimations.registerAnimations({
  animationCat: {
    properties: {
      rotateY: 360,
      rotateX: 360,
      rotateZ: 180,
    },
    easing: "Linear",
    duration: 6000,
  },
});

const CatScreen = () => {
  const [runAnimation, setRunAnimation] = useState(false);

  return (
    <ViroNode>
      <ViroNode
        key="cat"
        opacity={1}
        scale={[1, 1, 1]}
        position={[0, 100, -70]}
        rotation={[0, 180, 0]}
        animation={{ name: "animateLogo", loop: true, run: runAnimation }}
      >
        <ViroARImageMarker
          target="cat"
          onAnchorFound={() => setRunAnimation(true)}
        >
          <ViroAmbientLight color="#ffffff" intensity={200} />
          <Viro3DObject
            animation={{
              name: "animationCat",
              loop: true,
              run: true,
            }}
            dragType="FixedDistance"
            source={require("../../assets/images/content/cat/12221_Cat_v1_l3.obj")}
            resources={[
              require("../../assets/images/content/cat/12221_Cat_v1_l3.mtl"),
              require("../../assets/images/content/cat/Cat_bump.jpg"),
              require("../../assets/images/content/cat/Cat_diffuse.jpg"),
            ]}
            type="OBJ"
          />
        </ViroARImageMarker>
      </ViroNode>
    </ViroNode>
  );
};

export default CatScreen;
