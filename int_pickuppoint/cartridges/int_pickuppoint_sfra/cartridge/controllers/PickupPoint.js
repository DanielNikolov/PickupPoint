'use strict';


var server = require('server');

server.get('List',
    server.middleware.https,
    function (req, res, next) {
        var zipCode = req.httpParameterMap.zipCode ? req.httpParameterMap.zipCode.value : null;
        var PickupPointServiceHelper = require('*/cartridge/scripts/helpers/pickupPointServiceHelper');
        res.json(PickupPointServiceHelper.getPickupPoints(zipCode));
        next();
    }
);

module.exports = server.exports();
