const path = require('path');
const fs = require('fs');

const PLUGIN_EXT = '.vue';

/**
 * Reads the existing plugin files inside a folder and returns the list of names.
 * @param {string} basePath - Folder to search.
 * @returns {string[]} List of names.
 */
module.exports = function(basePath) {
  const files = fs.readdirSync(basePath);

  return files
    .reduce((plugins, file) => {
      const filePath = path.normalize(path.join(basePath, file));
      const stats = fs.statSync(filePath);
      let plugin;

      if (stats.isFile() && path.extname(file) === PLUGIN_EXT) {
        plugin = path.basename(file, PLUGIN_EXT);
      }

      return plugin ? plugins.concat(plugin) : plugins;
    }, [])
    .filter((plugin) => plugin !== 'index');
};
