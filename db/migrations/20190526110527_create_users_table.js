
//cli => knex migrate:make {Migration name}
//cli => knex migrate:rollback
//cli => knex migrate:latest

exports.up = function(knex, Promise) {
    return knex.schema.createTable('users', (table) => {
        table.increments();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.timestamp('create_date').defaultTo(knex.fn.now());
        table.timestamp('update_date').defaultTo(knex.fn.now());
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('users');
};
