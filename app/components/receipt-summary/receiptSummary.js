//controller as name: recsum
zlcApp.controller('ReceiptSummaryCtrl', [
  function() {

    this.fakeRecords = [
      { name : 'Macys' , 
        logo: 'https://hive-api.ziploop.com/images/logos/macy-s.png',
        receiptCount : 4 , 
        totals : [ 1 ,3 ,10, 20] },
      { name : 'Banana Republic' , 
        logo:'https://hive-api.ziploop.com/images/logos/banana-rebublic.png',
        receiptCount : 2 , 
        totals : [ 7, 13] },
      { name : 'Levis' , 
        logo : 'https://hive-api.ziploop.com/images/logos/levi.png',
        receiptCount : 1 , 
        totals : [ 15] }
    ];
    
}]);
