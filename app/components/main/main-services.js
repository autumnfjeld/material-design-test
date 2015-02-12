/* Service to provide styling classes for each route */

zlcApp.service('RouteCSSClasses', ['$location', function($location){
    
  var getClass = function(){
    // var routeClass = 'zl' + $location.path();
    var route = $location.path();
    console.log('route', route);
    // var routeClassMap = {
    //   '/home'      : 'md-primary',
    //   '/receipts'  : 'md-accent'
    // };
    var routeClassMap = {
      '/home'      : 'default',
      '/receipts'  : 'receiptTheme',
      '/rewards'   : 'rewardTheme',
      '/trends'    : 'trendTheme'
    };
    var routeToolbarMap = {
      // '/home'      : {'theme' :'default',       'title' : 'Ziploop' } ,
      '/home'      : {'theme' :'favoriteTheme', 'title' : 'Ziploop' } ,
      '/receipts'  : {'theme' :'receiptTheme',  'title' : 'Receipts'},
      '/rewards'   : {'theme' :'rewardTheme',   'title' : 'Rewards'},
      '/trends'    : {'theme' :'trendTheme',    'title' : 'Trends'}
    }
    // console.log('routeClass', routeClass);
    // console.log('routeClassMap[route]', routeClassMap[route]) ;
    return routeToolbarMap[route];
  }

  return {getClass : getClass};

}]);