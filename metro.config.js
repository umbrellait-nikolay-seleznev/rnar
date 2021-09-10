/**
 * Metro configuration for React Native
 * https://github.com/facebook/react-native
 *
 * @format
 */

module.exports = {
  transformer: {
    getTransformOptions: async () => ({
      transform: {
        experimentalImportSupport: false,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    assetExts: [
      "obj",
      "mtl",
      "jpg",
      "jpeg",
      "vrx",
      "hdr",
      "gltf",
      "glb",
      "bin",
      "arobject",
      "png",
      "svg",
      "mp4",
    ],
  },
};
