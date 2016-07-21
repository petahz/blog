(function() {
  angular.module('post')
  .controller('PostDialogCtrl', ['$mdDialog', function($mdDialog) {
    var vm = this;

    // vm.message is set through locals

    vm.close = function() {
      $mdDialog.hide();
    }
  }]);
})();