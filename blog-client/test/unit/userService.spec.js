describe('service: user', function() {
	var UserService, mockBackend, users;

	beforeEach(module('mavrckApp'));

	beforeEach(inject(function(_UserService_, _$httpBackend_) {
		UserService = _UserService_;
		mockBackend = _$httpBackend_;

    users = UserService.getUsers();

		// This will be used to mock the API response
		// var users = [{email: 'peter@blogger.co', password: 'peterblogger'}];
		// mockBackend.whenGET('/users')
		// .respond(users);
	}));

	describe('isAuthenticated', function() {
		it('return false on initialization', function() {
      var value = UserService.isAuthenticated();
			expect(value).toBe(false);
		});
	});

  describe('authenticate', function() {
		it('should set authenticated to true when passing in a valid user', function() {
      UserService.authenticate(users[0].email, users[0].password).finally(function() {
        var value = UserService.isAuthenticated();
			  expect(value).toBe(true);
      })
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
			UserService.create('newuser@blogger.co', 'newPassword').finally(function() {
				var users = UserService.getUsers();
				var lastUser = users[users.length-1];

				expect(lastUser.email).toBe('newuser@blogger.co');
			});
		});
	});
});