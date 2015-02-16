angular.module('sportStore.products', [
])
.constant('dataUrl', 'http://localhost:9000/api/products')
.directive('productsList', function(){
    return {
        restrict: 'E',
        templateUrl: 'product/products-list.html'
    };
})
.controller('productsCtrl', function($scope, $http, dataUrl){
    $scope.data = {};
    $http.get(dataUrl)
        .success(function(data){
            $scope.data.products = data;
        })
        .error(function(error){
            $scope.data.error = error;
        })
});