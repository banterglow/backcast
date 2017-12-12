var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
  },


  render: function() {
    this.$el.html(this.template());
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
