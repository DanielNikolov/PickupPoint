'use strict';

/**
 * Multicartridge npm installer command.
 */

const sfraBuilderConfig = require('../webpackHandling/sfraBuilderConfig');
const npmInstallHelper = require('./installHelper');

(() => {
    sfraBuilderConfig.cartridges.forEach(cartridge => {
        npmInstallHelper.npmInstall(cartridge);
    });
})();
