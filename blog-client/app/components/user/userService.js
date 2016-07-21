(function() {
  angular.module('user')
  .factory('UserService', ['$q', function($q) {
    var _authenticated = false;
    var _currentUser = {};
    // temporary until we have a backend
    var users = [{email: 'peter@blogger.co', password: 'peterblogger'}];

    return {
      isAuthenticated: function() {
        return _authenticated;
      },
      authenticate: function (email, password) {
        console.log('email: ', email, ' password: ', password);
        return $q(function(resolve, reject) {
          // todo: should call a backend
          users.forEach(function(user) {
            if (user.email === email && user.password === password) {
              _authenticated = true;
              _currentUser = user;
              resolve();
            }
          });

          reject();
        });
      },
      createUser: function(email, password) {
        _currentUser = {email: email, password: password};
        users.push(_currentUser);
      },
      logout: function() {
        _authenticated = false;
      }
    }
  }]);
})();