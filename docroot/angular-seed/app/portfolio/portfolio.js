'use strict';

angular.module('frontend.portfolio', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/portfolio', {
    templateUrl: 'portfolio/portfolio.html',
    controller: 'portfolio'
  });
}])

.controller('portfolio', [function() {

}]);