
'use strict';


exports.render = function(req, res) {

	res.render('index', {
		title: 'BiciApp',
		user: JSON.stringify(req.user)
	});
};