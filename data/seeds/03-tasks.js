exports.seed = function(knex) {
  return knex('tasks').insert([
    { id: 1, project_id: 1, description: 'task 1', notes: 'notes', completed: true},
    { id: 2, project_id: 1, description: 'task 2', notes: 'notes', completed: false },
    { id: 3, project_id: 1, description: 'task 3', notes: 'notes', completed: false },
	{ id: 4, project_id: 1, description: 'task 3', notes: 'notes', completed: false },

  ]);
};



