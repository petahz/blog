(function() {
  angular.module('user')
  .factory('UserService', ['$q', '$http', 'BlogApiUrl', function($q, $http, BlogApiUrl) {
    var _authenticated = false;
    var _currentUser = {};
    // temporary until we have a backend
    var _users = [];

    return {
      isAuthenticated: function() {
        return _authenticated;
      },
      authenticate: function (user) {
        console.log('email: ', user.email, ' password: ', user.password);

        return $http.post(BlogApiUrl + '/login', user).then(function(user) {
          _authenticated = true;
          _currentUser = user;
        });
      },
      getUsers: function() {
        return $http.get(BlogApiUrl + '/user');
      },
      getCurrentUser: function() {
        return _currentUser;
      },
      createUser: function(user) {
        return $http.post(BlogApiUrl + '/user', user).then(function(user) {
          _authenticated = true;
          _currentUser = user;
        });
      },
      logout: function() {
        _authenticated = false;
      }
    }
  }]);
})();