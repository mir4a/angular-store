/**
 * Created by mir4a on 9/19/14.
 */

  // Closure is a good habbit
(function () {
  var app = angular.module('store', ['store-products']);
  app.controller('StoreController', ['$http', function($http){
    var store = this;

    store.product = [];

    $http.get('api/products.json').success(function (data) {
      store.products = data;
    }).error(function (err) {
      console.log(err);
    });

  }]);

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });

})();
