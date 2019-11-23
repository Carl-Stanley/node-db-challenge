
exports.up = function(knex) {
    return knex.schema.createTable('tasks', table => {
        table.increments();
        table.string('description', 255).notNullable();
        table.string('notes', 255);
        table.boolean('completed');
        table
          .integer('project_id')
          .unsigned()
          .references('id')
          .inTable('projects')
          .onDelete('RESTRICT') 
          .onUpdate('CASCADE');
          
          table.timestamps(true, true);
      })  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks');
};