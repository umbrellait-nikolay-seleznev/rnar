/* eslint-disable global-require */
import React from "react";

import {
  ViroAnimations,
  ViroAmbientLight,
  Viro3DObject,
} from "@viro-community/react-viro";

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

const CatScreen = () => (
  <>
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
  </>
);

export default CatScreen;
