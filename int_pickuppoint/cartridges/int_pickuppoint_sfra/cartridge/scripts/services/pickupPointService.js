'use strict';

var LocalServiceRegistry = require('dw/svc/LocalServiceRegistry');

var pickupPointService = LocalServiceRegistry.createService('pickuppoint.service.rest', {
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

module.exports = {
    PickupPointService: pickupPointService
};
