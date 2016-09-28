app.controller("productShowCtrl",["$scope", "productsService", "shoppingCartService", "$stateParams", function($scope, productService, shoppingCartService, $stateParams) {

  $scope.cartItems = shoppingCartService.listAll();

  $scope.product = productService.getProduct($stateParams.id);
  $scope.categories = productService.getCategories();
  $scope.quantity = 1;

  $scope.increaseQuantity = function() {
    $scope.quantity++;
  }

  $scope.decreaseQuantity = function() {
    if($scope.quantity > 0) {
      $scope.quantity--;
    }
  }

  $scope.addToCart = function() {
    $shoppingCartService.addItem($scope.product.id, $scope.quantity);
  }

}])