  // Closure is a good habbit
(function () {
  var app = angular.module('store-products', []);

  app.directive('productTitle', function() {
    return {
      restrict: 'A', // E - element, A - attribute
      templateUrl: 'templates/name.html'
    }
  });

  app.directive('productTabs', function () {
    return {
      restrict: 'E',
      templateUrl: 'templates/tabs.html',
      controller: function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
          this.tab = setTab;
        };
        this.isSelected = function(checkTab) {
          return this.tab === checkTab;
        };
      },
      controllerAs: 'panel'
    }
  });

  app.directive('productGallery', function() {
    return {
      restrict: 'E',
      templateUrl: 'templates/product-gallery.html',
      controller: function() {
        this.current = 0;
        this.setCurrent = function(imageNumber){
          this.current = imageNumber || 0;
        };
      },
      controllerAs: 'gallery'
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
