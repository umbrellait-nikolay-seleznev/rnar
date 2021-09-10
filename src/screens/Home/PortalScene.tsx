import React, { useState } from "react";
import {
  ViroNode,
  ViroARImageMarker,
  ViroARTrackingTargets,
  ViroImage,
  ViroAnimations,
  ViroAmbientLight,
  Viro3DObject,
  ViroPortalScene,
  ViroPortal,
  Viro360Image,
  Viro360Video,
  ViroText,
} from "@viro-community/react-viro";

const qrKitchenImage = require("../../assets/images/anchors/qrCodKitchen.png");
const mcdonaldsImage = require("../../assets/images/content/mcdonalds.png");
const portalImage = require("../../assets/images/content/portal.jpg");
const portalImageKitchen = require("../../assets/images/content/portal2.jpg");

ViroARTrackingTargets.createTargets({
  qrCodeKitchen: {
    source: qrKitchenImage,
    orientation: "Up",
    physicalWidth: 0.035,
  },
  portal: {
    source: portalImage,
    orientation: "Up",
    physicalWidth: 0.035,
  },
  portalKitchen: {
    source: portalImageKitchen,
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

const PortalScene = () => {
  const [runAnimation, setRunAnimation] = useState(false);
  return (
    <>
      <ViroNode>
        <ViroARImageMarker
          target="qrCodeKitchen"
          onAnchorFound={() => setRunAnimation(true)}
        >
          <ViroNode
            key="mcLogo"
            opacity={1}
            position={[0, 0, 0]}
            animation={{ name: "animateLogo", loop: true, run: runAnimation }}
          >
            <ViroImage height={0.1} width={0.1} source={mcdonaldsImage} />
          </ViroNode>
        </ViroARImageMarker>
        <ViroARImageMarker target="portal">
          <ViroText
            text="Где-то сзади должен быть портал"
            position={[0.1, -0.4, -0.2]}
            style={{ fontSize: 10 }}
          />
          <ViroAmbientLight color="#FFFFFF" intensity={200} />
          <ViroPortalScene
            passable={true}
            dragType="FixedDistance"
            onDrag={() => {}}
          >
            <ViroPortal
              position={[0.3, 1, 0]}
              scale={[0.1, 0.1, 0.1]}
              rotation={[100, 90, 0]}
            >
              <Viro3DObject
                source={require("../../assets/images/content/portal_ship.vrx")}
                resources={[
                  require("../../assets/images/content/portal_ship_diffuse.png"),
                  require("../../assets/images/content/portal_ship_normal.png"),
                  require("../../assets/images/content/portal_ship_specular.png"),
                ]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Video
              source={require("../../assets/images/content/360_surf.mp4")}
              loop={true}
            />
          </ViroPortalScene>
        </ViroARImageMarker>
        <ViroARImageMarker target="portalKitchen">
          <ViroText
            text="Где-то правее должен быть портал"
            position={[0.1, -0.9, -0.1]}
            style={{ fontSize: 10 }}
          />
          <ViroAmbientLight color="#FFFFFF" intensity={200} />
          <ViroPortalScene
            passable={true}
            dragType="FixedDistance"
            onDrag={() => {}}
          >
            <ViroPortal
              position={[0.2, -0.7, -1]}
              scale={[0.1, 0.1, 0.1]}
              rotation={[100, 90, 0]}
            >
              <Viro3DObject
                source={require("../../assets/images/content/portal_ship.vrx")}
                resources={[
                  require("../../assets/images/content/portal_ship_diffuse.png"),
                  require("../../assets/images/content/portal_ship_normal.png"),
                  require("../../assets/images/content/portal_ship_specular.png"),
                ]}
                type="VRX"
              />
            </ViroPortal>
            <Viro360Image
              source={require("../../assets/images/content/360_island.jpeg")}
            />
          </ViroPortalScene>
        </ViroARImageMarker>
      </ViroNode>
    </>
  );
};

export default PortalScene;
