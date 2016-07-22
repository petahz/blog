(function() {
  angular.module('user')
  .factory('UserService', ['$q', function($q) {
    var _authenticated = false;
    var _currentUser = {};
    // temporary until we have a backend
    var _users = [];

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
      getUsers: function() {
        _users = JSON.parse(localStorage.get("blog.users")) || [];
        return _users;
      },
      getCurrentUser: function() {
        return _currentUser;
      },
      createUser: function(email, password) {
        _currentUser = {email: email, password: password};
        _users.push(_currentUser);
      },
      logout: function() {
        _authenticated = false;
      }
    }
  }]);
})();