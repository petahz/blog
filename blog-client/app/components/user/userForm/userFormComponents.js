(function() {
  angular.module('user', [])
  .component('login', {
    templateUrl: './app/components/user/userForm/userForm.html',
    controller: function($state, UserService) {
      var vm = this;

      vm.message = 'Login to use Blogger';
      vm.loginForm = true;
      vm.submitLabel = "Login";

      vm.submit = function() {
        UserService.authenticate(vm.user).then(function() {
          $state.go('posts');
        }).catch(function(response) {
          vm.error = response.data.error;
        });
      }
    },
    controllerAs: 'vm'
  })
  .component('signup', {
    templateUrl: './app/components/user/userForm/userForm.html',
    controller: function($state, $mdToast, UserService) {
      var vm = this;

      vm.message = 'Sign up to use Blogger';
      vm.signupForm = true;
      vm.submitLabel = "Sign up";

      vm.submit = function() {
        UserService.createUser(vm.user).then(function() {
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