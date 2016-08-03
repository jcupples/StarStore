(function () {
    var app = angular.module('store', []);

    app.controller('StoreController', function () {
        $scope.products = stars;
    });
    var stars = [
        {
            name: 'Yellow Star',
            price: 5.99,
            description: 'An ordinary sun-like star capable of supporting life under the right conditions.',
            canPurchase: true,
            soldOut: true
        },
        {
            name: 'Red Giant',
            price: 2.99,
            description: "An old star near the end of its life.",
            canPurchase: true,
        },
        {
            name: 'Pulsar',
            price: .99,
            description: "A dead star that spins on its axis many times a second.",
            canPurchase: true
        }
    ];
})();