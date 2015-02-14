angular.module('sportStore.products', [
])
.controller('productsCtrl', function($scope){
    $scope.data = {
        products:[
            {name:"Product #1", description: "A product", category:"Category #1", price:100},
            {name:"Product #1.3", description: "A product", category:"Category #1", price:103},
            {name:"Product #1.6", description: "A product", category:"Category #1", price:106},
            {name:"Product #1.9", description: "A product", category:"Category #1", price:109},
            {name:"Product #2", description: "A product", category:"Category #1", price:110},
            {name:"Product #3", description: "A product", category:"Category #2", price:200},
            {name:"Product #4", description: "A product", category:"Category #3", price:210}
        ]
    };
});