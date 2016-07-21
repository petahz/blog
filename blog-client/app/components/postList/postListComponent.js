(function() {
  angular.module('post', [])
  .component('postList', {
    templateUrl: './app/components/postList/postList.html',
    controller: function($mdDialog) {
      var vm = this;

      vm.postList = [{title: 'How to Win in Poker', subtitle: 'Tips from a professional',
       content: '1. You need a poker face.', author: 'peter@blogger.co'}];

      vm.postDialog = function(ev, mode) {
        var message = '';

        switch (mode) {
          case 'create':
            message = 'Create New Post';
            break;
          case 'edit':
            message = 'Edit Your Post';
            break;
        }

        $mdDialog.show({
            templateUrl: './app/components/postList/post/postDialog.html',
            controller: 'PostDialogCtrl',
            controllerAs: 'vm',
            targetEvent: ev,
            clickOutsideToClose: false,
            hasBackdrop: true,
            locals: {message: message},
            bindToController: true
        })
      }
    },
    controllerAs: 'vm'
  });
})();