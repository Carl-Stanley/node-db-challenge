const express = require('express');

const resourcesRouter = require('./api/routes/resourcerouter.js')

const projectRouter = require('./api/routes/projectrouter.js')


const db = require('./data/db-Config');

const server = express();

server.use(express.json());


server.use('/api/projects', projectRouter)

server.use('/api/resources', resourcesRouter)


module.exports = server;