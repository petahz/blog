(function() {
  angular.module('blogClientApp', [
    'ui.router',
    'ngMaterial',
    'navbar',
    'post',
    'user'
  ])

  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('login', {
        url: '/login',
        template: '<login></login>',
        authenticate: false
      })
      .state('signup', {
        url: '/signup',
        template: '<signup></signup>',
        authenticate: false
      })
      .state('posts', {
        url: '/posts',
        template: '<post-list></post-list>',
        authenticate: true
      });

    $urlRouterProvider.otherwise("/login");
  })
  
  .config(['$mdThemingProvider', function($mdThemingProvider) {
    $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('amber')
        .warnPalette('red');;
  }])
  
  .run(function ($rootScope, $state, UserService) {
    $rootScope.$on("$stateChangeStart", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !UserService.isAuthenticated()) {
        // User isn’t authenticated
        $state.transitionTo("login");
        event.preventDefault(); 
      }
    });
  });

})();