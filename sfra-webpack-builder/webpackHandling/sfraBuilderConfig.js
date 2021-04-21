'use strict';

const path = require('path');

/**
 * Allows to configure aliases for you require loading
 */
module.exports.aliasConfig = {
  // enter all aliases to configure

  alias: {
    base: path.resolve(
      process.cwd(), // eslint-disable-next-line max-len
      "../storefront-reference-architecture/cartridges/app_storefront_base/cartridge/client/default/"
    ),
    wishlists: path.resolve(
      process.cwd(),
      "../plugin_wishlists/cartridges/plugin_wishlists/cartridge/client/default/"
    ),
    gmo: path.resolve(
      process.cwd(),
      "../link_gmo/cartridges/int_gmo_sfra/cartridge/client/default/"
    )
  },
};

/**
 * Exposes cartridges included in the project
 */
module.exports.cartridges = [
  "../storefront-reference-architecture/cartridges/app_storefront_base",
  "../plugin_wishlists/cartridges/plugin_wishlists",
  "../app_daikokuya/cartridges/app_daikokuya",
  "../link_gmo/cartridges/int_gmo_sfra"
];
