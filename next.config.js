module.exports = {
  distDir: "dist",
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['url-loader'],
    });
    config.module.rules.push({
      test: /\.png$/,
      use: ['url-loader'],
    });

    return config;
  }
};
