const glob = require('glob');

module.exports.withExtension = (libName) => (config) => {
  config.entry = {
    ...Object.fromEntries(
      glob
        .sync(`./apps/${libName}/src/*.ts`)
        .map((path) => [
          path.replace(`apps/${libName}/src/`, '').replace('.ts', ''),
          './' + path,
        ]),
    ),
    ...config.entry,
  };

  config.output.filename = '[name].js';

  return config;
};
