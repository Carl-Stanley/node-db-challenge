const db = require("../../data/db-Config");

module.exports = {
    find,
    findById,
    add
  }

function find() {
  return db("resources");
}

function findById(id) {
  return db("resources").where({ id }).first();
}

function add(resource) {
    return db('resources', 'id')
    .insert(resource)
    .then(id => findById(...id));
};


