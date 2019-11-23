const db = require("../../data/db-Config");

module.exports = {
    find,
    findById,
    add,
    findAllByProjectId
  }

function find() {
  return db("tasks");
}

function findById(id) {
  return db("tasks").where({ id }).first();
}

function findAllByProjectId(id) {
  return db("tasks").where({ project_id: id });
}

function add(task, project_id) {
  task.project_id = project_id;
  return db('tasks', 'id')
  .insert(task)
  .then(id => findById(...id));
};
