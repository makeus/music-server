/**
* Album.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {
  attributes: {
  	id: {
  		type: 'integer',
  		autoIncrement: true,
    	primaryKey: true
  	},
    name: {
	    type: 'string',
    	required: true,
    	defaultsTo: 'Unknown Album'
    },
    year: 'string',
    genre: 'string',
    songs: {
      collection: 'song',
      via: 'album'
    }
  },

  findOneByName: function(name) {
    return Album.findOne({name: name});
  }
}

