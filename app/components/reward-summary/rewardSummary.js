//controller as name: recsum
zlcApp.controller('RewardSummaryCtrl', ['$mdDialog',
  function($mdDialog) {

    var holdThis = this;
    this.fakeRecords = [
      { name : 'Macys' , 
        logo: 'https://hive-api.ziploop.com/images/logos/macy-s.png',
        recordCount : 4 , 
        totals : [ 1 ,3 ,10, 20] },
      { name : 'Banana Republic' , 
        logo:'https://hive-api.ziploop.com/images/logos/banana-rebublic.png',
        recordCount : 2 , 
        totals : [ 7, 13] },
      { name : 'Levis' , 
        logo : 'https://hive-api.ziploop.com/images/logos/levi.png',
        recordCount : 1 , 
        totals : [ 15] }
    ];


    this.alert = '';
  this.showConfirm = function(ev) {
    var confirm = $mdDialog.confirm()
      .title('Redeeming this reward?')
      .content('(Material Design is soooo groovy.)')
      .ariaLabel('Lucky day')
      .ok('Redeeming')
      .cancel('Not redeeming')
      .targetEvent(ev);
    $mdDialog.show(confirm).then(function() {
      holdThis.alert = 'You redemeed this reward.';
    }, function() {
      holdThis.alert = 'You did nothing.';
    });
  };

    
}]);