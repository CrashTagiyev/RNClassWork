module.exports = {
  presets: ['module:@react-native/babel-preset',`nativewind/babel`],
  plugins: [
    [
      require.resolve('babel-plugin-module-resolver'),
      {
        root: ["./src", "./assets"],
        alias:{
          "@assets": "./assets",
          "@src": "./src",
          "@screens": "./src/Screens",
        }
      }
    ],
  ]
};
