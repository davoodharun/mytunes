// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Songs.extend({

  initialize: function() {
    // this.on('dequeue', this.remove,this);
    this.on('play', function(){
      if (this.length ===0){
        this.playFirst();
      }
   },this)

  },

  playFirst: function(){
    this.trigger('enqueue', this.model)

  }





});