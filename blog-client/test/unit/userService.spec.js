describe('service: user', function() {
	var UserService, mockBackend, users, BlogApiUrl;

	beforeEach(angular.mock.module('blogClientApp'));

	beforeEach(inject(function(_UserService_, _$httpBackend_, _BlogApiUrl_) {
		UserService = _UserService_;
		mockBackend = _$httpBackend_;
		BlogApiUrl = _BlogApiUrl_;

		mockBackend.whenGET(BlogApiUrl + '/user')
		.respond([{email: 'peter@blogger.co', password: 'peterblogger'}]);

		mockBackend.whenPOST(BlogApiUrl + '/login')
		.respond([{email: 'peter@blogger.co', password: 'peterblogger'}]);

		users = UserService.getUsers();
		mockBackend.flush();
	}));

	describe('isAuthenticated', function() {
		it('return false on initialization', function() {
      var value = UserService.isAuthenticated();
			expect(value).toBe(false);
		});
	});

  describe('authenticate', function() {
		it('should set authenticated to true when passing in a valid user', function() {
      UserService.authenticate('peter@blogger.co', 'peterblogger').finally(function() {
        var value = UserService.isAuthenticated();
			  expect(value).toBe(true);
      });

			mockBackend.flush();
		});

		it('should keep authenticated as false when passing in an invalid user', function() {
      UserService.authenticate('invaliduser@blogger.co', 'doesnotexist').finally(function() {
        var value = UserService.isAuthenticated();
			  expect(value).toBe(false);
      })
		});
	});

	describe('create', function() {
		it('should create a new user', function() {
			UserService.createUser('newuser@blogger.co', 'newPassword').finally(function() {
				var users = UserService.getUsers();
				var lastUser = users[users.length-1];

				expect(lastUser.email).toBe('newuser@blogger.co');
			});
		});
	});
});