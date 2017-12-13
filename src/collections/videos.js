var Videos = Backbone.Collection.extend({

  model: Video,

  search: function (query) {
    outerThis = this;
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      data: {
        part: 'snippet',
        key: window.YOUTUBE_API_KEY,
        q: query,
        maxResults: 5,
        type: 'video',
        videoEmbeddable: 'true'
      },
      success: function (data) {
        outerThis.reset(data.items);
        outerThis.trigger('search');
      }
    });
  }

});
