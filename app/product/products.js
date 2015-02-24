angular.module('sportStore.products', [
])
.constant('dataUrl', 'http://localhost:2403/product')
.constant('orderUrl', 'http://localhost:2403/orders')
.directive('productsList', function(){
    return {
        restrict: 'E',
        templateUrl: 'product/products-list.html'
    };
})
.controller('productsCtrl', function($scope, $http, $location, dataUrl, orderUrl, cart){
    $scope.data = {};
    $http.get(dataUrl)
        .success(function(data){
            $scope.data.products = data;
        })
        .error(function(error){
            $scope.data.error = error;
        });
    
    $scope.sendOrder = function(shippingDetails){
        var order = angular.copy(shippingDetails);
        order.products = cart.getProducts();
        
        $http.post(orderUrl, order)
            .success(function(data){
                $scope.data.orderId = data.id;
                cart.getProducts().length = 0;
            })
            .error(function(){
                $scope.data.orderError = error;
            })
            .finally(function(){
                $location.path("/complete");
            });
    }
    
});