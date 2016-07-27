'use strict';


var mongoose = require('mongoose'),
Bikeshops = mongoose.model('Bikeshops');

var getErrorMessage = function(err) {
	if (err.errors) {
		for (var errName in err.errors) {
			if (err.errors[errName].message) return err.errors[errName].message;
		}
	} else {
		return 'Unknown server error';
	}
};

exports.list = function(req, res) {
	Article.find().sort('-created').populate('creator', 'firstName lastName fullName').exec(function(err, articles) {
		if (err) { return res.status(400).send({
			message: getErrorMessage(err)
		});
	} else {
		res.json(articles);
	}
});
};


exports.read = function(req, res) {
	res.json(req.bikeshop);
};




