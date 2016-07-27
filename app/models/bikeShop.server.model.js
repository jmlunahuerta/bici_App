
'use strict';


var mongoose = require('mongoose'),
	Schema = mongoose.Schema;


var BikeShopSchema = new Schema({
	created: {
		type: Date,
		default: Date.now
	},
	title: {
		type: String,
		default: '',
		trim: true,
		required: 'Necesitas un título'
	},
	content: {
		type: String,
		default: '',
		trim: true
	},
	lat:{
		type: Number,
		default:  0,
		trim: true
	},
	lon: {
		type: Number,
		default:  0,
		trim: true
	},
	creator: {
		type: Schema.ObjectId,
		ref: 'User'
	}
});


mongoose.model('Bikeshop', BikeShopSchema);