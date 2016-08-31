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

/**
 * Main AngularJS Web Application
 */
var app = angular.module('WebApp', [
  'ngRoute',
  'WebApp.controllers',
  'WebApp.services'
]);

/**
 * Configure the Routes
 */
app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
    // Home
    .when("/", {templateUrl: "partials/home.html", controller: "PageCtrl"})
    // Pages
    .when("/accounts", {templateUrl: "partials/accounts.html", controller: "AccountCtrl"})
    .when("/account/view/:id", {templateUrl: "partials/accountHistory.html", controller: "AccountHistoryCtrl"})
    .when("/withdraw", {templateUrl: "partials/withdraw.html", controller: "AccountWithdrawCtrl"})
    .when("/deposit", {templateUrl: "partials/deposit.html", controller: "AccountDepositCtrl"})
    // else Home
    .otherwise("/",{templateUrl: "partials/home.html", controller: "PageCtrl"});
}]);