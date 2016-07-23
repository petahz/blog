(function() {
  angular.module('post')
  .factory('PostService', ['$q', '$http', 'BlogApiUrl', function($q, $http, BlogApiUrl) {
    var posts = [{id: 1, title: 'How to Win in Poker', subtitle: 'Tips from a professional',
       content: '1. You need a poker face.', author: 'peter@blogger.co'}];

    return {
      getPosts: function() {
        return $http.get(BlogApiUrl + '/post');
      },
      create: function(post) {
        return $http.post(BlogApiUrl + '/post', post);
      },
      update: function(post) {
        return $http.put(BlogApiUrl + '/post/' + post.id, post);
      },
      delete: function(post) {
        return $http.delete(BlogApiUrl + '/post', post);
      }
    }
  }]);
})();