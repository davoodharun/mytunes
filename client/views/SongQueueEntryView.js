// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',
  className: "songQueue",

    template: _.template('<td class="title"><%= title %></td><td class="artist"><strong><%= artist%></strong></td>'),
    events: {
      'click' : 'dequeue'
    },
    render: function(){
      return this.$el.html(this.template(this.model.attributes));
    },

    dequeue: function(){

      this.model.dequeue();
    }

});
