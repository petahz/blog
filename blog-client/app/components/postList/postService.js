(function() {
  angular.module('user')
  .factory('PostService', ['$q', function($q) {
    var posts = [{id: 1, title: 'How to Win in Poker', subtitle: 'Tips from a professional',
       content: '1. You need a poker face.', author: 'peter@blogger.co'}];

    return {
      getPosts: function() {
        return posts;
      },
      create: function(post) {
        return $q(function(resolve, reject) {
          posts.unshift(post);
          resolve();
        });
      },
      update: function(post) {
        return $q(function(resolve, reject) {
          posts.forEach(function(existingPost) {
            if (post.id === existingPost.id) {
              existingPost = post;
            }
          });
        });
      }
    }
  }]);
})();