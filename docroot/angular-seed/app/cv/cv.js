'use strict';

angular.module('frontend.cv', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/cv', {
        templateUrl: 'cv/cv.html',
        controller: 'cv'
    });
}])

.controller('cv', [function() {

}]);