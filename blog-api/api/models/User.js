/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

var bcrypt = require('bcrypt');

module.exports = {

  attributes: {
    firstName: {
      type: 'string',
      size: 128,
      required: true
    },
    lastName: {
      type: 'string',
      size: 128
    },
    email: {
      type: 'string',
      size: 128,
      required: true
    },
    password: {
      type: 'string',
      size: 25,
      required: true
    },
    contacts: {
      collection: 'Post',
      via: 'author'
    },
    toJSON: function() {
        var obj = this.toObject();
        delete obj.password;
        return obj;
    },
    beforeCreate: function(user, cb) {
        bcrypt.genSalt(10, function(err, salt) {
            bcrypt.hash(user.password, salt, function(err, hash) {
                if (err) {
                    console.log(err);
                    cb(err);
                } else {
                    user.password = hash;
                    cb();
                }
            });
        });
    }
  }
};

