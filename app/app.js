'use strict';

// Declare app level module which depends on views, and components
var zlcApp = angular.module('zlcApp', [
  'ngRoute',
  'ngMaterial',
  'ngAnimate'
]);

zlcApp.config(['$routeProvider', '$mdThemingProvider',
 function($routeProvider, $mdThemingProvider) {
  $routeProvider
  .when('/home', {
    templateUrl: 'components/home/home.html',
    controller: 'HomeCtrl'
  })
  .when('/receipts', {
    templateUrl: 'components/receipt-summary/receipt-summary.html',
    controller: 'ReceiptSummaryCtrl',
    controllerAs: 'recsum'
  })
  .when('/rewards', {
    templateUrl: 'components/reward-summary/reward-summary.html',
    controller: 'RewardSummaryCtrl',
    controllerAs: 'rewsum'
  })
  .when('/receipt', {
    templateUrl: 'components/receipt/receipt.html',
    controller: 'ReceiptCtrl',
    controllerAs: 'receipt'
  })
  .otherwise({redirectTo: '/'});

  /* Set up Ziploop Material Design Theme */
  // $mdThemingProvider.alwaysWatchTheme(true);
  /* Extend existing yellow palette */
  var homePaletteMap = $mdThemingProvider.extendPalette('yellow', 
    {'500': '#fcedab'});
  $mdThemingProvider.definePalette('homePalette', homePaletteMap);


  //RECEIPT
  var receiptPaletteMap = $mdThemingProvider.extendPalette('cyan', 
    { '500': '#3b89a5',
      '600' : '#357992'});   //button hover
  $mdThemingProvider.definePalette('receiptPalette', receiptPaletteMap); 
  $mdThemingProvider.theme('receiptTheme')
    .primaryPalette('receiptPalette',
      {'hue-2': '800'})
    .accentPalette('blue-grey')  
    .warnPalette('deep-orange');

  //REWARD
  var rewardPaletteMap = $mdThemingProvider.extendPalette('teal', 
    { '500': '#7fab7c',
      '600': '#63955f'});
  $mdThemingProvider.definePalette('rewardPalette', rewardPaletteMap);     
  $mdThemingProvider.theme('rewardTheme')
    .primaryPalette('rewardPalette')
    .accentPalette('blue-grey')  
    .warnPalette('deep-orange'); 

  //GREY TRENDS
  var trendPaletteMap = $mdThemingProvider.extendPalette('blue-grey');
  $mdThemingProvider.definePalette('trendPalette', trendPaletteMap);     
  $mdThemingProvider.theme('trendTheme')
    .primaryPalette('trendPalette',
      {'default': '300', 
        'hue-1': '100', // lighter shade <code>md-hue-1</code> class
        'hue-2': '400', // darker shadethe <code>md-hue-2</code> class
        'hue-3': '50'}) // ligtest shade <code>md-hue-3</code> class})
    .accentPalette('blue')  
    .warnPalette('deep-orange'); 
   
  //ORANGE TRENDS
  var trendPaletteMap = $mdThemingProvider.extendPalette('orange', 
    { '500': '#dc7f38',
      '600': '#c76a23',
      'contrastDefaultColor': 'light'});
  $mdThemingProvider.definePalette('trendPalette', trendPaletteMap);     
  $mdThemingProvider.theme('trendTheme')
    .primaryPalette('trendPalette')
    .accentPalette('blue-grey')  
    .warnPalette('deep-orange');     

  //FAVORITES
  var favoritePaletteMap = $mdThemingProvider.extendPalette('indigo', 
    { '500': '#4c4c61',
    // { '500': '#26225d',
      '600': '#3d3d4d',
      'contrastDefaultColor': 'light'});
  $mdThemingProvider.definePalette('favoritePalette', favoritePaletteMap);     
  $mdThemingProvider.theme('favoriteTheme')
    .primaryPalette('favoritePalette')
    .accentPalette('blue-grey')  
    .warnPalette('deep-orange');     

    //some components seem hardwired to use default pallete
  $mdThemingProvider.theme('default')
    .primaryPalette('favoritePalette') 
    .accentPalette('receiptPalette')
    .warnPalette('deep-orange');  

}]);


zlcApp.controller('MainCtrl', ['$rootScope', '$scope', '$mdSidenav', 'RouteCSSClasses',
  function($rootScope, $scope, $mdSidenav, RouteCSSClasses) {
    var holdThis = this;
    this.toggleSidenav = toggleSideNav;
    this.getRouteSettings = RouteCSSClasses.getClass;
    $rootScope.$on("$routeChangeSuccess", function(event) {
      holdThis.routeSettings = holdThis.getRouteSettings();
    });
    function toggleSideNav() {
      $mdSidenav('sidenav').toggle();
    };
}]);


zlcApp.controller('HeaderCtrl', ['$rootScope', '$route', 'RouteCSSClasses', 
  function($rootScope, $route, RouteCSSClasses){
  // this.toolbar = RouteCSSClasses.getClass();
  // this.getToolbar = RouteCSSClasses.getClass;
  // var holdThis = this;

  // $rootScope.$on("$routeChangeSuccess", function(event) {
  //   // console.log('holdThis', holdThis);
  //   holdThis.toolbar = holdThis.getToolbar();
  // });
}]);

zlcApp.controller('SideMenuCtrl', ['$mdSidenav','$location', '$log',
  function($mdSidenav, $location, $log){
    this.sideMenuStuff = [
      { label: 'Home',      fontglyph : 'zli-home' ,    link: '/home'},
      { label: 'Receipts',  fontglyph : 'zli-receipts', link: "/receipts"},
      { label: 'Rewards',   fontglyph : 'zli-rewards',  link: "/rewards"},
      { label: 'Trends',    fontglyph : 'zli-promotions',link: '/trends'},
      { label: 'Favories',   fontglyph : 'zli-myloop'   ,link: '/favorites'}           
     ];
    this.close = function(path) {
      $mdSidenav('sidenav').close()
                        .then(function(){
                          // path = ''
                          console.log('path', path);
                          $log.debug("close LEFT is done");
                          $location.path(path)
                        });
    };
}]);

zlcApp.controller('HomeCtrl', [
  function() {
    console.log('HomeCtrl');
    //maybe don't need home cntrl
}]);
