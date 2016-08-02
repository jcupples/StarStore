(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        this.products = stars;
    });
    var stars = [
        {
            name: 'Yellow Star',
            price: 5.00,
            description: 'An ordinary sun-like star capable of supporting life under the right conditions',
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Red Giant',
            price: 3.00,
            description: "An old star near the end of its life",
            canPurchase: false,

        }
    ];

})();