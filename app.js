/**
 * Created by mir4a on 9/19/14.
 */

// Closure is a good habbit
(function(){
  var app = angular.module('store', []);
  app.controller('StoreController', function() {
    this.product = gem;
  });

  var gem = {
    name: 'Wow gem',
    price: 2.65,
    description: "Some description"
  }
})();
