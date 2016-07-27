'use strict';


angular.module('bikeshop').factory('Bikeshop', ['$resource', function($resource) {

    return $resource('api/bikeShops/:bikeShopId', {
        bikeShopId: '@_id'
    }, {
        update: {
            method: 'PUT'
        }
    });
}]);