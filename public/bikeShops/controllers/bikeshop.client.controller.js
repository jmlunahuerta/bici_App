
'use strict';


angular.module('bikeshop').controller('BikeshopsController', ['$scope', '$http','$routeParams', '$location', 'Authentication', 'Bikeshops', 
    function($scope, $http, $routeParams, $location, Authentication, Bikeshops) {

    


    $scope.findOne = function() {
        $scope.bikeshops = Bikeshops.get({
            bikeShopId: $routeParams.bikeShopId
        });
    };


    $scope.$on('mapInitialized', function(event,map) {

        var marker = map.markers[0];

        $scope.$watch('bikeShop.lat + bikeShop.lon',function(newVal,oldVal){
            if(newVal === oldVal){
                return;
            }

            map.setCenter({lat:$scope.bikeshop.lat, lng:$scope.bikeshop.lon});
            marker.setPosition({lat:$scope.bikeshop.lat, lng:$scope.bikeshop.lon});
        });


        locations.forEach(function(n, i){
        var marker = new google.maps.Marker({
            position: n.latlon,
            map: map,
            title: "Big Map",
            icon: "http://maps.google.com/mapfiles/ms/icons/blue-dot.png",
        });

        // For each marker created, add a listener that checks for clicks
        google.maps.event.addListener(marker, 'click', function(e){

            // When clicked, open the selected marker's message
            currentSelectedMarker = n;
            n.message.open(map, marker);
        });
    });

    });

    $scope.gotolink= function(event,i) {
        $location.path('bikeshops/'+ i._id);

    };


}
]);