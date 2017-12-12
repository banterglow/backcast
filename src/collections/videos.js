var Videos = Backbone.Collection.extend({

  model: Video,

  // ajax call, pass into here yo.
  // search function which fetches data

  select: function(id) {
    this.trigger('videoChange', console.log(id));
    console.log(this);
  },
  
  search: function () {
    //AJAX THINGS
  } 

});
