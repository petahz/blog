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
      authenticate: function (email, password) {
        console.log('email: ', email, ' password: ', password);

        return $http.post(BlogApiUrl + '/login', {email: email, password: password}).then(function(user) {
          _authenticated = true;
          _currentUser = user;
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