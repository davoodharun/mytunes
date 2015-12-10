// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  tagName: 'tr',

    template: _.template('<td><%= title %> by..</td><td><strong><%= artist%></strong></td>'),

    render: function(){
      return this.$el.html(this.template(this.model.attributes));
    }
});
