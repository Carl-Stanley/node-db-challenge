
exports.seed = function(knex) {
  return knex('projects').del()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        { id: 1, name: 'Annoy Neighbors', description: 'Annoy the neighbors next door.'},
        { id: 2, name: 'Shop Black Friday', description: 'By stuff I do not need'},
        { id: 3, name: 'Fly a kite', description: 'Wait for a windy day.'},
		{ id: 4, name: 'Learn a martial art', description: 'become like water'}
      ]);
    });
};