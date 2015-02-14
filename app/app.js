'use strict';

// Declare app level module which depends on views, and components
angular.module('sportStore', [
    'ngRoute',
    'sportStore.version',
    'sportStore.products',
    'sportStore.productsList',
    'customFilters'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/'});
}]);
