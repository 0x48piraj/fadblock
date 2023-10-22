module.exports.withUI = () => (config) => {
  config.module.rules.push({
    test: /\.scss$/,
    use: [{ loader: 'sass-loader', options: {} }],
    type: 'css',
  });
  config.module.rules.push({
    test: /\.html$/,
    use: [{ loader: 'raw-loader', options: {} }],
  });

  return config;
};
