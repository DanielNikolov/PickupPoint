'use strict';

/**
 * @constructor
 * @classdesc Pickup point model
 * @param {Object} pickupPointObj Raw pickup point
 */
function pickupPoint(pickupPointObj) {
    if (pickupPointObj) {
        this.ID = pickupPointObj.id;
        this.name = pickupPointObj.name;
        if (pickupPointObj.address) {
            this.address1 = pickupPointObj.address.street || '';
            this.address2 = pickupPointObj.address.number || '';
            this.address2 += pickupPointObj.address.addition || '';
            this.city = pickupPointObj.address.city;
            this.postalCode = pickupPointObj.address.postalCode || pickupPointObj.address.zipCode;
            this.countryCode = {
                value: pickupPointObj.address.countryCode
            };
        }

        this.latitude = pickupPointObj.geoLocation ? pickupPointObj.geoLocation.latitude : '';
        this.longitude = pickupPointObj.geoLocation ? pickupPointObj.geoLocation.longitude : '';

        this.phone = '';
        this.stateCode = pickupPointObj.depotCode || '';
    }
}

module.exports = pickupPoint;
