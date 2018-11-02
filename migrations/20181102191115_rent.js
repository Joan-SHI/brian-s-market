
exports.up = function(knex, Promise) {
  return knex.schema.createTable('rent', (table) =>{
      table.increments('id').primary()
      table.string('time')
      table.string('area')

  })
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTable('rent')
  
};
