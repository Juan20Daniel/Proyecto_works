module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    'react-native-worklets/plugin',
    [
      "module-resolver",
      {
        root: ["./src"],
        extensions: [".ios.js", ".android.js", ".js", ".ts", ".tsx", ".json"],
        alias: {
          "@": "./src",
          presentation: "./src/presentation",
          infrestructure: "./src/infrestructure",
          assets: "./src/assets"
        },
      },
    ]
  ]
};
