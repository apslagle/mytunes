// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    // console.log('This collection: ' + this);
    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    }, this);
  },

  playFirst: function() {
    // console.log(this.at(0));
    this.at(0).play();
  }

});