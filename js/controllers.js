/*  ======================================================
  Diderson Baka Web and Mobile Application Developer  
  www.diderson.com
  ------------------------------------------------------
  NOTE: This code is intellectual property of
  Diderson Baka  and may not be
  reproduced or used without prior permission.
  ------------------------------------------------------
  Copyright 2016 Diderson Baka Web Developer 
  ======================================================  */
angular.module('WebApp.controllers', ['ngRoute', 'WebApp.services'])

/*
RESTFUL_API.requestURL is defines in constants.js file how API URL
*/

/**
 * Controls all other Pages
 */
.controller('PageCtrl', function ($scope, $location, $http) {
  console.log("Page Controller reporting for duty.");

  // Activates the Carousel
  $('.carousel').carousel({
    interval: 5000
  });

  // Activates Tooltips for Social Links
  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  })
})

.controller('AccountCtrl', function ($scope, $http, AccountSERVICE_FACTORY, $routeParams, RESTFUL_API  ) {
    $scope.accounts = [];

    $scope.accounts = AccountSERVICE_FACTORY.getAccountList();
    //from here there should be a call from the API
    /*AccountSERVICE_FACTORY.getAccountList().then(function(accounts) { 
        $scope.accountList = accounts.data;

        console.log('accounts', accounts.data);
    }, function(err) {
          //alert("Error");
          console.error(err);
          // An error occured. Show a message to the user
    });*/
})
.controller('AccountHistoryCtrl', function ($scope, $http, AccountSERVICE_FACTORY, $routeParams, RESTFUL_API  ) {

  $scope.transactions = [];
  $scope.accounts = [];
  $scope.transactions = AccountSERVICE_FACTORY.getAccountHistory();
  $scope.accounts = AccountSERVICE_FACTORY.getAccountList();
})

.controller('AccountWithdrawCtrl', function ($scope, $http, AccountSERVICE_FACTORY, $routeParams, RESTFUL_API  ) {
  $scope.accounts = [];
  $scope.withdaw = {};
  $scope.accounts = AccountSERVICE_FACTORY.getAccountList();

   $scope.submitWithdaw = function() {
     //console.log("submitWithdaw", $scope.withdaw );
     var accounCompIdAvail = $scope.withdaw.account;
     var wAmount = $scope.withdaw.amount;
      /* here we do some checking */
     if(accounCompIdAvail !=='') {
        var accountArr = accounCompIdAvail.split('-');
        var idAcc = accountArr[0];
        var balanceAcc = accountArr[1];

        if (idAcc == 1) {
            if (wAmount < 1000 && wAmount < balanceAcc) { //WE MUST MAKE SURE FOR A SAVING ACCOUNT THE AMOUNT MUST BE LESS 1000
                console.log('Post to API', 'id: /', idAcc, 'amount :', wAmount);
                /* normally here should be a post to the API */
                //$http.post(RESTFUL_API.requestURL +'/w/'+idAcc+'/'+wAmount)
            } else {
               alert('please min amount 1000 for saving account') ;
            }
        } else if(idAcc == 2) {
            var limit = 100000 + Number(balanceAcc);
            if (wAmount < limit) { //WE MUST MAKE SURE FOR A Curent ACCOUNT THE Amount must use overdraft limit 150000
                console.log('Post to API', 'id: /', idAcc, 'amount :', wAmount, 'limit:', limit);
                /* normally here should be a post to the API */
                //$http.post(RESTFUL_API.requestURL +'/w/'+idAcc+'/'+wAmount)
            } else {
               alert('please overDraft limit is 100000') ;
            }
        }
        
     }
    /* normally here should be a post to the API */
   /* $http.post(RESTFUL_API.requestURL +'/w/'+id+'/'+amount)
          .then(function(res){
              if(res.data == '200') {
                //console.log(res);
              } else {
                
              }
                    //console.log(res);
                    //$state.go('tab.mybusiness');
            }, function(err){
               console.error(err);    
          });*/
   }

   $scope.selectedAccountObj = function(account){
    console.log("account", account);
   }
})

.controller('AccountDepositCtrl', function ($scope, $http, AccountSERVICE_FACTORY, $routeParams, RESTFUL_API  ) {

        $scope.accounts = [];
        $scope.deposit = {};
        $scope.accounts = AccountSERVICE_FACTORY.getAccountList();
     $scope.submitDeposit = function() {
        var accounCompIdAvail = $scope.deposit.account;
        var dAmount = $scope.deposit.amount;
        if(accounCompIdAvail !=='') {
            var accountArr = accounCompIdAvail.split('-');
            var idAcc = accountArr[0];
            var balanceAcc = accountArr[1];

            alert('Deposit of '+dAmount+' has been made with success') ;

             /* normally here should be a post to the API */
            /* $http.post(RESTFUL_API.requestURL +id+'/'+amount)
              .then(function(res){
                  if(res.data == '200') {
                    //console.log(res);
                  } else {
                    
                  }
                        //console.log(res);
                        //$state.go('tab.mybusiness');
                }, function(err){
                   console.error(err);    
              });*/
            }
        }
})
;