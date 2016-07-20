(function() {
  angular.module('user')
  .factory('UserService', ['$q', function($q) {
    var _authenticated = false;
    // temporary
    var users = [{email: 'peter@blogger.co', password: 'peterblogger'}];

    return {
      isAuthenticated: function() {
        return _authenticated;
      },
      authenticate: function (email, password) {
        console.log('email: ', email, ' password: ', password);
        return $q(function(resolve, reject) {
          users.forEach(function(user) {
            if (user.email === email && user.password === password) {
              _authenticated = true;
              resolve();
            }
          });

          reject();
        });
      },
      logout: function() {
        _authenticated = false;
      }
    }
  }]);
})();