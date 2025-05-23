module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [['react-native-reanimated/plugin'],
    [
      'module-resolver',
      {
        alias: {
          '@components': './src/components',
          '@constants': './src/constants',
          '@features': './src/features',
          '@network': './src/network',
          '@assets': './src/assets',
          '@theme': './src/theme',
          '@utils': './src/utils',
          '@redux': './src/redux',
        },
      },
    ]]
  };
};
