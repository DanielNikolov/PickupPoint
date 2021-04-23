'use strict';


var PickupPointModel = require('*/cartridge/models/pickupPoint');

/**
 * @constructor
 * @classdesc Pickup points model
 * @param {Object} servicePoints Raw pickup point list
 */
function pickupPoints(servicePoints) {
    this.points = {};
    var result = {};
    if (servicePoints && servicePoints.length > 0) {
        servicePoints.forEach(function (servicePoint) {
            var pickupPoint = new PickupPointModel(servicePoint);
            result[servicePoint.id] = pickupPoint;
        });
    }

    this.points = result;
}

module.exports = pickupPoints;
