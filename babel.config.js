module.exports = {
  presets: ["module:metro-react-native-babel-preset"],
  plugins: [
    [
      "module-resolver",
      {
        root: ["./"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          src: "./src",
          fonts: "./src/assets/fonts",
          components: "./src/components",
        },
      },
    ],
    ["@babel/plugin-proposal-object-rest-spread"],
    [
      "@babel/plugin-proposal-decorators",
      {
        legacy: true,
      },
    ],
  ],
};
