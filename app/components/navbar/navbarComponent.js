(function() {
  angular.module('navbar', [])
  .component('navbar', {
    templateUrl: './app/components/navbar/navbar.html',
    controller: function($state, UserService) {
      var vm = this;

      vm.loggedIn = function() {
        return UserService.isAuthenticated();
      }

      vm.signout = function() {
        UserService.logout();
        $state.go('login');
      }
    },
    controllerAs: 'vm'
  });
})();