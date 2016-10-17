var mongoose = require('mongoose');

var dotaplayerSchema = mongoose.Schema({

	nickname: String,
	twitter_id: String,
	facebook_id: String,
	twitch_id: String,
	steam_id: String,
	dota2_id: String,
	wiki_url: String,
	image_url: String,
	alternative_names: String

});

module.exports = mongoose.model('Dotaplayer', dotaplayerSchema);
