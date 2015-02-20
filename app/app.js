'use strict';

// Declare app level module which depends on views, and components
angular.module('sportStore', [
    'ngRoute',
    'sportStore.version',
    'sportStore.products',
    'sportStore.productsList',
    'customFilters',
    'cart',
    'sportStore.checkout'
])
.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when("/complete", {templateUrl: "views/thanks.html"});
	$routeProvider.when("/placeorder", {templateUrl: "views/place-order.html"});
  	$routeProvider.when("/checkout", {templateUrl: "cart/checkout-summary.html"});
  	$routeProvider.when("/products", {templateUrl: "product/products-list.html"});
  	$routeProvider.otherwise({templateUrl: "product/products-list.html"});
}]);
