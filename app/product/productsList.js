angular.module('sportStore.productsList', [
])
.controller('productsListCtrl', function($scope, $filter){
    var selectedCategory = null;
    
    $scope.selectCategory = function(newCategory){
        selectedCategory = newCategory;
    }
    
    $scope.categoryFilterFn = function(product){
        return selectedCategory == null || product.category == selectedCategory;
    }
});