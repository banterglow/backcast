var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    // listen for videoListEntry to tell videoList that it has been clicked, then it will notify app.js
  },

  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderVideoList, this);
    this.$el.html(this.template([this.collection.models]));
    return this;
  },
  
  renderVideoList: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
