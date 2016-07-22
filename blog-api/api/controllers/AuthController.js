/**
 * AuthController
 *
 * @description :: Server-side logic for managing auths
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	login: function(req, res) {
    User.findOne({email: req.body.email}).then(function(user) {
      console.log("user found: ", user);
      if (user.password === req.body.password) {
        req.session.authenticated = true;
        req.session.user = user;
        res.json(200, user);
      } else {
        res.json(401, {error: "Incorrect password."});
      }
    }).catch(function() {
      res.send(404, {error: "User not found."});
    });
  },
  logout: function(req, res) {
    req.session.authenticated = false;
    req.session.user = null;
  }
};

