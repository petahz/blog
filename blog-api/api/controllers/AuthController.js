/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

var passport = require('passport');

module.exports = {
	login: function(req, res) {
    passport.authenticate('local', function(err, user, info) {
        if ((err) || (!user)) {
            return res.send(404, {error: "User not found."});
        }
        req.logIn(user, function(err) {
            if (err) return res.json(401, {error: "Incorrect password."});

            req.session.authenticated = true;
            req.session.user = user;
            res.json(200, user);
        });

    })(req, res);
  },
  logout: function(req, res) {
    req.session.authenticated = false;
    req.session.user = null;
    req.logout();
  }
};

