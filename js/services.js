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
angular.module('WebApp.services', [])
.factory('AccountSERVICE_FACTORY', function($http, RESTFUL_API) {
  /* this will be the current data for the user logged in*/
  var dummyAcountsList = [{
      id: '1',
      type: 'Saving Account',
      account: '78542315569',
      balance: '3000',
      Available: '2500'
    },

    {
      id: '2',
      type: 'Current Account',
      account: '138542315609',
      balance: '50000',
      Available: '50000'
    }
  ];

  var transactionHistory = [{
      id: '1',
      date:'23/05/2016',
      description:'payment at Mc donald',
      amount:'-120'
    },
    {
      id: '2',
      date:'25/05/2016',
      description:'Dstv Account Payment',
      amount:'-356.10'
    },
     {
      id: '3',
      date:'02/06/2016',
      description:'Deposit at Town Branch',
      amount:'25000'
    },
     {
      id: '4',
      date:'07/06/2016',
      description:'Withdraw at BP ATM',
      amount:'-800'
    },
     {
      id: '5',
      date:'10/06/2016',
      description:'payment at Primi Restaurant',
      amount:'-150'
    },
     {
      id: '6',
      date:'21/06/2016',
      description:'payment at Shell Garage',
      amount:'-240'
    }
  ]; 

  return {
        getAccountList: function(){
          return dummyAcountsList;
        },
        getAccountHistory: function(){
          return transactionHistory;
        },
        getAccountListFromAPI: function (){
          return $http.get('http://api.newbank.com:6754/');                
        },
        getViewAccountDetailFromAPI: function (id){
          return $http.get('http://api.newbank.com:6754/'+id);                
        }
    }
})

.factory('BusinessOpportunities', function($q, $http) {
  var incrementDate = function (date, amount) {
      var tmpDate = new Date(date);
      tmpDate.setDate(tmpDate.getDate() + amount)
      return tmpDate;
  };
  var bo = [];
  bo.push(
    {
      "company": "Mining Qualification Authority",
      "sector":"Law",
      "contact": "Ms Tsholo Dilape, Procurement Specialist, Tel: 011 547 2681, Email: TsholoD@mqa.org.za",
      "description":"Appoint panel of attorneys for 2 year period to provide litigation & legal advisory services",     
      "closingdate": "11 January 2016, 11:00am",
      "howtobid": "Document collected<br> 30 Nov 2015~ 1: 7 Anerley Road~ Parktown~ 2: www.mqa.org.za",
      "image": "img/pages/business-opp/mining.png"
    } 
  );

  bo.push(
    {
      "company": "University of Johannesburg",
      "sector":"Marketing",
      "contact": "Email: craffie@uj.ac.za, Email: hanniep@uj.ac.za",
      "description":"Appointing Brand Agency  for UJ for 3-5 years",      
      "closingdate": "6 December 2015; 12:00",
      "howtobid": "Proposal and Company Profile to be send to UJ~ craffie@uj.ac.za",
      "image": "img/pages/business-opp/uj.png"
    } 
  );
  bo.push(
    {
      "company": "Limpopo Economic Development Agency",
      "sector":"Property",
      "contact": "Mr. Joel Tshabalala, Tel: 015 633 4729, Email: joel.tshabalala@lieda.co.za",
      "description":"Buy two properties in Mpumalanaga, *Farm, Portion 14&15 of the farm Zwaartkoppies 316 JT, 43, 469 hectares, Belfast municipality, *Commercial Site, Site b1137 Thalamahashe-B, 4.3951 hectares, Bushbuckridge Municipal Area",     
      "closingdate": "11 January 2016, 11:00am",
      "howtobid": "Clarification Meeting, 3 December, 2015, 10am, Site B1137 Thulamahashe-B, ~South-East of Acornhoek, 3 December, 2015, 3pm, Farm Zwartkoppies 316 JT, 22km from Belfast, West of R540 road",
      "image": "img/pages/business-opp/leda.png"
    } 
  );

  bo.push(
    {
      "company": "Construction Education & Training",
      "sector":"Logistics",
      "contact": "Ms Nokwanda Dlamini, Email: Nokwandad@ceta.co.za, Tel: 011 265 5900",
      "description":"Provision of car rental services",     
      "closingdate": "",
      "howtobid": "Compulsory Briefing, 12 January2016, CETA  Head Office, 12:00am, Building no 5, Midrand Business Park, 563 Old Pretoria Main Road, Bids to be collected, 27 Nov 2015. www.ceta.org.za",
      "image": "img/pages/business-opp/seta.png"
    } 
  );

  bo.push(
    {
      "company": "Centurion Aerospace Village",
      "sector":"Environmental",
      "contact": "Email: info@cav.org.za",
      "description":"Appointment of service provider to clean BEWI Landside, *Hydroseeding of exposed site, *Manage alien/weeds plants, *Manage erosion/Clearing vegetation",     
      "closingdate": "21 December 2015, 11am,",
      "howtobid": "Collect submission documents, *Centurion Aerospace Village, Cnr, Van Der Spuy Street & Van Ryneveld Avenue Centurion, 0045, * Via email: info@cav.org.za, ender: CAV11/2015.TN.002/ENV, Site Inspection, 30 November 2015, 10am, Address bove",
      "image": "img/pages/business-opp/aerospace.png"
    } 
  );

  bo.push(
    {
      "company": "Rustenburg Rapid Transport Trust",
      "sector":"Logistics",
      "contact": "Mr. Jonathan Bloom, Email: info@mpbs.co.za",
      "description":"Appointment of service provider for supply, delivery and maintenance of 191 x 12 m commuter buses",      
      "closingdate": "21 December 2015, 11am,",
      "howtobid": "Compulsory Briefing, 10 December 2015, 14:00, Ground Floor Hall of Waste Management Depot, 156 Bethlehem Drive, Rustenburg, North West, Tenders to be hand delivered, 34 Benoni Street, Rustenburg North, between 8am-16:00 weekdays. Tender documents Available from 4 December 2015",
      "image": "img/pages/business-opp/varona.png"
    } 
  );
  
  var getBusOpps = function() {
      /*var deferred = $q.defer();
      deferred.resolve(bo);
      return deferred.promise;*/
      return $http.get('/business-opportunity/all');
  }
  
  return {
      get:getBusOpps
  };

})
;