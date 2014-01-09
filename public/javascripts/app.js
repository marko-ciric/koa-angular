var module = angular.module('instagram-feed', ['ngResource', 'ngRoute']);

module.

module.factory('Users', ['$resource', function ($resource) {
    return $resource('/api/users', {id: '@id'});
}]);

module.controller('MainController', ['$scope', 'Users', function ($scope, Users) {

    $scope.users = [
        {id: 1, name: 'Marko', photos: [
            {name: 'A'},
            {name: 'B'}
        ]},
        {id: 2, name: 'Nikola', photos: [
            {name: 'A'},
            {name: 'B'}
        ]},
        {id: 3, name: 'Ivan', photos: [
            {name: 'A'},
            {name: 'B'}
        ]}
    ];
}]);
