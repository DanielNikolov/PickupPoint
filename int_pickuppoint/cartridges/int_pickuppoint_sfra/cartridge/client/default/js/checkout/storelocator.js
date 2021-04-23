'use strict';


module.exports = {
    initActions: function () {
        $('body').on('click', '.single-shipping .shipping-store-locator__search', function () {
            var $this = $(this);
            var searchZipCode = $this.closest('.shipping-store-locator').find('.shipping-store-locator__zip input').val();
            if (searchZipCode) {
                var targetUrl = $this.closest('.shipping-store-locator').data('searchurl');
                var requestData = {
                    zipCode: searchZipCode
                };
                $.ajax({
                    url: targetUrl,
                    dataType: 'json',
                    method: 'GET',
                    data: requestData,
                    cached: true,
                    success: function (response) {
                        $this.closest('.shipping-store-locator')
                            .find('.shipping-store-locator__results__stores')
                            .empty();
                        if (!response.error && response.stores.stores.length > 0) {
                            $this.closest('.shipping-store-locator')
                                .find('.shipping-store-locator__results__stores')
                                .append(response.stores.storesResultsHtml);
                        }
                    },
                    error: function () {
                        $this.closest('.shipping-store-locator')
                            .find('.shipping-store-locator__results__stores')
                            .empty();
                    }
                });
            }
        });

        $('body').on('click', '.single-shipping .shipping-store-locator .select-store-input',
            function () {
                if ($(this).is(':checked')) {
                    var $this = $(this);
                    var storeAddress = $this.data('store-info');
                    var $shippingAddress = $this.closest('.shipping-address');
                    $shippingAddress.find('input[name$="_firstName"]').val(storeAddress.name);
                    $shippingAddress.find('input[name$="_lastName"]').val('Store');
                    $shippingAddress.find('input[name$="_address1"]').val(storeAddress.address1);
                    $shippingAddress.find('input[name$="_address2"]').val(storeAddress.address2);
                    $shippingAddress.find('input[name$="_city"]').val(storeAddress.city);
                    $shippingAddress.find('input[name$="_postalCode"]').val(storeAddress.postalCode);
                    $shippingAddress.find('select[name$="_country"]').val(storeAddress.countryCode);
                    $shippingAddress.find('select[name$="_stateCode"]').val('OTHER');
                }
            }
        );
    }
};
