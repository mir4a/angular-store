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
    this.tab = 1;
    this.selectTab = function(setTab) {
      this.tab = setTab;
    };
    this.isSelected = function(checkTab) {
      return this.tab === checkTab;
    };
  });

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }
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
      ],
      reviews: [
        {
          stars: 5,
          body: "I love this gem!",
          author: "joe@example.org",
          createdOn: 1397490980837
        }, {
          stars: 1,
          body: "This gem sucks.",
          author: "tim@example.org",
          createdOn: 1397490980837
        }
      ]
    }
  ]
})();
