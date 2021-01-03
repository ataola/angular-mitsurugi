const app = angular.module('app', []);
app.controller('home', function ($scope, $http) {
  $scope.msg = 'Hello World';
});
