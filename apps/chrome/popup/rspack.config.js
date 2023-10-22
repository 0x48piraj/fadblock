const { composePlugins, withNx, withWeb } = require('@nx/rspack');
const { withUI } = require('../../../tools/rspack/ui-config');

module.exports = composePlugins(withNx(), withWeb(), withUI(), (config) => {
  return config;
});
