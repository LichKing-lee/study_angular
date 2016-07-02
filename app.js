/**
 * Created by ChangYong on 2016. 5. 28..
 */
var app = angular.module("MyApp", []);
app.controller("mainCtrl", ["$scope", function($scope){
    var menuList = [
        new Item(1, '샌드위치', 2000, 0),
        new Item(2, '아메리카노', 1000, 0),
        new Item(3, '카푸치노', 1500, 0)
    ];

    $scope.menuList = menuList;
    $scope.totalPrice = 0;
    $scope.buy = function(){
        $scope.totalPrice = 0;
        $scope.menuList.forEach(function(menu){
            $scope.totalPrice += (menu.itemPrice * Number(menu.itemCount));
        });
    }
}]);

function Item(itemId, itemName, itemPrice, itemCount){
    this.itemId = itemId;
    this.itemName = itemName;
    this.itemPrice = itemPrice;
    this.itemCount = itemCount;
}