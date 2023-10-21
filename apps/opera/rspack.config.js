const { composePlugins, withNx, withWeb } = require('@nx/rspack');
const { withExtension } = require('../../tools/rspack/extention-config');

module.exports = composePlugins(
  withNx(),
  withWeb(),
  withExtension('opera'),
  (config) => {
    return config;
  },
);
