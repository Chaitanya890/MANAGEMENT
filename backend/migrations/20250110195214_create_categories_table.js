exports.up = function(knex) {
  return knex.schema.createTable('categories', function(table) {
    table.increments('category_id').primary();  // Primary Key
    table.string('category_name').notNullable();
    table.text('description').nullable();
    table.enum('status', ['0', '1', '2', '99']).defaultTo('0');  // Default status is 'created'
    table.timestamps(true, true);  // Created and updated timestamps
  });
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('categories');
};
