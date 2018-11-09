
exports.up = function(knex, Promise) {
    return knex.schema.createTable('bank_rate', (table) =>{
        table.increments('id').primary()
        table.string('bank_name')
        table.string('rate')
  
    })
  };
  
  exports.down = function(knex, Promise) {
      return knex.schema.dropTable('bank_rate')
    
  };
  
