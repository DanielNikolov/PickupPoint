'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

/**
 * Create service configuration
 * @returns {Object} service instance
 */
function pickupPointService() {
    return LocalServiceRegistry.createService('pickuppoint.service.rest', {
        createRequest: function (svc, params) {
            svc.setRequestMethod('GET');
            svc.addHeader('Content-Type', 'application/json');
            var serviceUrl = svc.getURL();
            serviceUrl = serviceUrl + '?zipCode=' + params.zipCode;
            svc.setURL(serviceUrl);
        },
        parseResponse: function (svc, response) {
            return response;
        }
    });
}

module.exports = {
    pickupPointService: pickupPointService
};
