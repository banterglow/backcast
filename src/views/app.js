var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    console.log('top this', this);
    this.videos = new Videos(window.exampleVideoData);
    this.render();

    this.videos.on('videoChange', function(id) {
      var selectedVideo;
      for (var i = 0; i < this.videos.models.length; i++) {
        if (this.videos.models[i].id === id) {
          selectedVideo = this.videos.models[i];
          break;
        }
      }
      new VideoPlayerView({
        el: this.$('.player'),
        model: selectedVideo,
        collection: this.videos
      }).render();
    }, this);
    
    $(function() {
      $('#search-btn').on('click', function() {
        console.log('hello');
        $.ajax({
          url: 'https://www.googleapis.com/youtube/v3/search',
          data: {
            part: 'snippet',
            key: window.YOUTUBE_API_KEY,
            q: $('.form-control').val(),
            maxResults: 5,
            type: 'video',
            videoEmbeddable: 'true'
          },
          success: function(data) {
            console.log(data.items);
            console.log('this', this);
            this.videos = new Videos(data.items);
            new VideoListView({
              el: this.$('.list'),
              collection: this.videos
            }).render();
          }
        });
      });
    });
    
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el: this.$('.player'),
      model: this.videos.models[0],
      collection: this.videos
    }).render();

    new SearchView({
      el: this.$('.search')
    }).render();

    return this;
  },
  
  template: templateURL('src/templates/app.html')

  // Listeners

  // Listen for search submit
  // Triggers api fetch of search term.
  // Updates video collection with 5 new video models
  // Updates videoListView based on updated video collection

  // Listen for click on video list title
  // Pass selected model into VideoPlayerView 

});
