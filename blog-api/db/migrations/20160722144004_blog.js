'use strict';

exports.up = function(knex, Promise) {
  knex.schema.createTable('users', function(table) {
    table.increments('id').index().primary().notNullable();
    table.string('email', 100).unique().notNullable();
    table.string('first_name', 128).notNullable();
    table.string('last_name', 128);
    table.string('password', 25).notNullable();
  });
};

exports.down = function(knex, Promise) {
  knex.schema.dropTable('users');
};
