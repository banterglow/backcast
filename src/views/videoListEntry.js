var VideoListEntryView = Backbone.View.extend({

  events: {
    'click .video-list-entry': 'handleClick'
  },

  handleClick: function(e) {
    this.model.select(e.target.className.slice(23));
  },

  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

  // this component will render individual clickable video result things
  // 

});
