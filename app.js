/**
 * Created by mir4a on 9/19/14.
 */

  // Closure is a good habbit
(function () {
  var app = angular.module('store', []);
  app.controller('StoreController', function () {
    this.products = gem;
  });

  app.controller('PanelController', function () {

  });

  var gem = [
    {
      name       : 'Wow gem',
      price      : 2.65,
      description: "Some description",
      canPurchase: true,
      soldOut    : false,
      images: [
        "images/hokkey.jpg",
        "images/horror.jpg"
      ]
    },
    {
      name       : 'Gadamn gem',
      price      : 2,
      description: "Some description",
      canPurchase: false,
      soldOut    : true,
      images: [
        "images/humor.jpg",
        "images/kamish.jpg"
      ]
    },
    {
      name       : 'Waaat?',
      price      : 23.45,
      description: "Some description",
      canPurchase: false,
      soldOut    : false,
      images: [
        "images/kashey.jpg",
        "images/horror.jpg"
      ]
    }
  ]
})();
