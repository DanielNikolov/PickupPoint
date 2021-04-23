'use strict';

var PickupPointService = require('*/cartridge/scripts/services/pickupPointService').pickupPointService();
var PickupPointsModel = require('*/cartridge/models/pickupPoints');
var StoresModel = require('*/cartridge/models/stores');

/**
 * Get list of pickup points
 * @param {string} zipCode zip code to search
 * @return {Object} error flag and objects
 */
function getPickupPointList(zipCode) {
    var responseObj = {
        error: true,
        stores: []
    };
    try {
        if (zipCode) {
            var response = PickupPointService.call({ zipCode: zipCode });
            if (response.status === 'OK' && response.object) {
                var servicePoints = JSON.parse(response.object.text);
                var pickupPoints = new PickupPointsModel(servicePoints);
                responseObj.stores = new StoresModel(pickupPoints.points,
                    { postalCode: zipCode },
                    15,
                    dw.web.URLUtils.url('Stores-FindStores', 'showMap', true).toString(),
                    dw.system.Site.getCurrent().getCustomPreferenceValue('mapAPI')
                );
            }
            responseObj.error = false;
        }
    } catch (e) {
        dw.system.Logger.error('ERROR: Error getting list of stores. Error: ' + e.message);
    }

    return responseObj;
}

module.exports = {
    getPickupPoints: getPickupPointList
};
