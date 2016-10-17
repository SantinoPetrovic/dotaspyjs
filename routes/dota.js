var _ = require('lodash');
var Dotaplayer = require('../models/dota.js');

module.exports = function(app) {
	/* Create */
	app.post('/dotaplayer', function (req, res) {
		var newDotaplayer = new Dotaplayer(req.body);
		newDotaplayer.save(function(err){
			if(err) {
				res.json({info: 'error creating Dotaplayer', error: err});
			};
			res.json({info: 'Dotaplayer stored in mongodb successfully!'});
		});
	});

	/* Read */
	app.get('/dotaplayer', function (req, res) {
		Dotaplayer.find(function(err, dotaplayers){
			if(err) {
				res.json({info: 'error finding Dotaplayer', error: err});
			};
			res.json({info: 'Dotaplayer found in mongodb successfully!', data: dotaplayers});
		});
	});		

	app.get('/dotaplayer/:id', function (req, res) {
		Dotaplayer.findById(req.params.id, function(err, dotaplayers){
			if(err) {
				res.json({info: 'error finding Dotaplayer', error: err});
			};
			if(dotaplayers){
				res.json({info: 'Dotaplayer found in mongodb successfully!'});
			} else {
			    res.json({info: 'Dotaplayer not found'});
			}
		});
	});	

	/* Update */
	app.put('/dotaplayer/:id', function (req, res) {
		Dotaplayer.findById(req.params.id, function(err, dotaplayers){
			if(err) {
				res.json({info: 'error finding Dotaplayer', error: err});
			};
			if(dotaplayers){
				_.merge(dotaplayers, req.body);
				dotaplayers.save(function(err) {
					if(err) {
						res.json({info: 'error updating Dotaplayer', error: err});		
					};
					res.json({info: 'Dotaplayer updating successfully', error: err});
				});
				res.json({info: 'Dotaplayer found in mongodb successfully!'});
			} else {
			    res.json({info: 'Dotaplayer not found'});
			}
		});
	});

	/* Delete */
	app.delete('/dotaplayer/:id', function(req, res) {
		Dotaplayer.findByIdAndRemove(req.params.id, function(err){
			if(err) {
				res.json({info: 'error removing dotaplayer', error: err});
			};
			res.json({info: 'dotaplayer removed successfully'});
		});
	});

}
