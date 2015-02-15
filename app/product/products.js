angular.module('sportStore.products', [
])
.constant('dataUrl', 'http://localhost:9000/api/products')
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