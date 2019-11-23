
exports.up = function(knex) {
    return knex.schema.createTable('projects', function(table) {
        table.increments();
        table.string('name', 128).notNullable();
        table.string('description', 64).notNullable();
        table.boolean('completed');    
        table
            .integer('resource_id')
            .unsigned()
            .references('id')
            .inTable('resources')
            .onDelete('RESTRICT') 
            .onUpdate('CASCADE');
        
        table.timestamps(true, true);
        
      })
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
};


