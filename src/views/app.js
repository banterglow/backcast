var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos(window.exampleVideoData);
    this.render();
  },

  render: function() {
    this.$el.html(this.template());

    new VideoListView({
      el: this.$('.list'),
      collection: this.videos
    }).render();

    new VideoPlayerView({
      el:this.$('.player')
    }).render();

    new SearchView({
      el:this.$('.search')
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
