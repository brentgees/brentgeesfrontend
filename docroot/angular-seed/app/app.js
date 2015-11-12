'use strict';

// Declare app level module which depends on views, and components
angular.module('frontend', [
  'ngRoute',
  'frontend.view1',
  'frontend.portfolio',
  'frontend.cv'
]).
config(['$routeProvider', function($routeProvider) {
  //$locationProvider.html5mode(true);
  $routeProvider.otherwise({redirectTo: '/'});
}])
.controller('AppCtrl', ['$http', '$scope', function($http,$scope) {

  $http.get('http://brentgees.backend.local/portfolio').success(function(data) {
    console.log(data);
    $scope.api = data;
  },function(err){
    console.log(err);
  });
}]);


