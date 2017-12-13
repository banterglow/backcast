var VideoListView = Backbone.View.extend({

  el: '.video-list',

  initialize: function() {
    this.collection.on('search', this.render, this);
    // listen for videoListEntry to tell videoList that it has been clicked, then it will notify app.js
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideoList, this);
    // this.$el.prepend('<div class="video-list">');
    // this.$el.append('</div>');
    return this;
  },
  
  renderVideoList: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.find('.video-list').append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
