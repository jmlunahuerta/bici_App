// Invoke 'strict' JavaScript mode
'use strict';


var users = require('../../app/controllers/users.server.controller'),
	bikeShops = require('../../app/controllers/bikeshop.server.controller');
	


module.exports = function(app) {
	
	app.route('/api/bikeShops')
	   .get(bikeShops.list)
	
	
	
	app.route('/api/bikeShops/:bikeShopId')
	   .get(bikeShops.read)
	  

	
	app.param('bikeShopId', bikeShops.bikeShopByID);
};