(function() {
  angular.module('user', [])
  .component('login', {
    templateUrl: './app/components/user/userForm/userForm.html',
    controller: function($state, UserService) {
      var vm = this;

      vm.message = 'Login to use Blogger';
      vm.loginForm = true;

      vm.submit = function() {
        UserService.authenticate(vm.user.email, vm.user.password).then(function() {
          $state.go('posts');
        }).catch(function() {
          vm.error = 'Invalid user.';
        });
      }
    },
    controllerAs: 'vm'
  })
  .component('signup', {
    templateUrl: './app/components/user/userForm/userForm.html',
    controller: function($state, $mdToast, UserService) {
      var vm = this;

      vm.message = 'Signup to use Blogger';

      vm.submit = function() {
        UserService.createUser(vm.user.email, vm.user.password).then(function() {
          $mdToast.show(
            $mdToast.simple()
              .textContent('Account created.')
              .position('top right')
              .hideDelay(3000)
          );

          $state.go('posts');
        }).catch(function() {
          vm.error = 'Could not create user.';
        });
      }
    },
    controllerAs: 'vm'
  });
})();