/**
 * Post.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    title: {
      type: 'string',
      size: 128,
      required: true
    },
    subtitle: {
      type: 'string',
      size: 128
    },
    content: {
      type: 'string',
      size: 512,
      required: true
    },
    author: {
      model: 'User',
      required: true
    },
  }
};

