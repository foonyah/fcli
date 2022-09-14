/**
 * [foonyah/fcli] service/BootstrapUtils.js
 */
const figlet = require('figlet');
exports.default = class BootstrapUtils {
  static showBanner() {
    console.log(figlet.textSync('foonyah-CLI', { horizontalLayout: 'fitted' }));
  }
}
