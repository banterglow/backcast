var VideoPlayerView = Backbone.View.extend({

  render: function() {
    this.$el.html(this.template(this.model));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
