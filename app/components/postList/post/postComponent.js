(function() {
  angular.module('post')
  .component('post', {
    bindings: {
      post: '<',
      edit: '&'
    },
    templateUrl: './app/components/postList/post/post.html',
    controller: function() {},
    controllerAs: 'vm'
  });
})();