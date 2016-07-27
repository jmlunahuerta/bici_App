// Invoke 'strict' JavaScript mode
'use strict';

// Configure the 'bikeshops' module routes
angular.module('bikeshop').config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/bikeshop', {
			templateUrl: 'articles/views/list-articles.client.view.html'
		});
	}
]); 