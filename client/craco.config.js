module.exports = {
  devServer: (devServerConfig) => {
    devServerConfig.webSocketServer = {
      options: { path: process.env.PUBLIC_URL + '/ws' },
    };
    return devServerConfig;
  },
};
