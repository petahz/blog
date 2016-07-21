(function() {
  angular.module('post', [])
  .component('postList', {
    templateUrl: './app/components/postList/postList.html',
    controller: function($mdDialog) {
      var vm = this;

      vm.postList = [{title: 'How to Win in Poker', subtitle: 'Tips from a professional',
       content: '1. You need a poker face.', author: 'peter@blogger.co'}];

      vm.postDialog = function() {
        $mdDialog.show({
            templateUrl: './app/components/postList/post/post_dialog.html',
            controllerAs: 'vm',
            targetEvent: ev,
            clickOutsideToClose: false,
            hasBackdrop: true,
            locals: locals
        })
      }
    },
    controllerAs: 'vm'
  });
})();