(function() {
  angular.module('post', [])
  .component('postList', {
    templateUrl: './app/components/postList/postList.html',
    controller: function($mdDialog, $mdToast, PostService, UserService) {
      var vm = this;

      vm.postList = PostService.getPosts();
      vm.currentUser = UserService.getCurrentUser();

      vm.postDialog = function(ev, mode, post) {
        $mdDialog.show({
            templateUrl: './app/components/postList/post/postDialog.html',
            controller: 'PostDialogCtrl',
            controllerAs: 'vm',
            targetEvent: ev,
            clickOutsideToClose: false,
            hasBackdrop: true,
            locals: {mode: mode, post: post},
            bindToController: true
        }).then(function(post) {
          if (post) {
            switch (mode) {
              case 'create':
                PostService.create(post).then(function() {
                  $mdToast.show(
                    $mdToast.simple()
                      .textContent('Post created.')
                      .position('top right')
                      .hideDelay(3000)
                  );
                });
                break;
              case 'edit':
                PostService.update(post).then(function() {
                  $mdToast.show(
                    $mdToast.simple()
                      .textContent('Post updated.')
                      .position('top right')
                      .hideDelay(3000)
                  );
                });
                break;
            }
          }
        });
      }
    },
    controllerAs: 'vm'
  });
})();