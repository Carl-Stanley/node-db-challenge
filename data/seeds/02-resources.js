
exports.seed = function(knex) {
  return knex('resources').insert([
    { name: 'VS Code', id: 1, description: 'Dev Environment' }, 
    { name: 'SQL Lite3', id: 2, description: 'DEV DB' }, 
    { name: 'NotePad++', id: 3, description: 'vew files'  }, 
	{ name: 'Roleaids', id: 3, description: 'Ant Acid'  }
  ]);
};
