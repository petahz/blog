(function() {
  angular.module('post')
  .controller('PostDialogCtrl', ['$mdDialog', function($mdDialog) {
    var vm = this;

    // vm.mode is set through locals
    switch (vm.mode) {
      case 'create':
        vm.message = 'Create New Post';
        vm.buttonLabel = 'Create';
        break;
      case 'edit':
        vm.message = 'Edit Your Post';
        vm.buttonLabel = 'Update';
        break;
    }

    vm.close = function() {
      $mdDialog.hide();
    }
  }]);
})();