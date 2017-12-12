var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('sync', this.render, this);
    // listen for videoListEntry to tell videoList that it has been clicked, then it will notify app.js
  },

  render: function() {
    this.$el.children().detach();
    this.collection.forEach(this.renderVideoList, this);
    this.$el.html(this.template(this.collection.models));
    $('.list').append(this.$el.html());
    return this;
  },

  // vidObject: {
  //   // video0: new VideoListEntryView(this.collection[0]),
  //   // video1: new VideoListEntryView(this.collection[1]),
  //   // video2: new VideoListEntryView(this.collection[2]),
  //   // video3: new VideoListEntryView(this.collection[3]),
  //   // video4: new VideoListEntryView(this.collection[4]) 
  // },
  
  renderVideoList: function(video) {
    var videoListEntry = new VideoListEntryView({model: video});
    this.$el.append(videoListEntry.render());
  },

  template: templateURL('src/templates/videoList.html')

});
