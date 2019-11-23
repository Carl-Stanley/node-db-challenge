const express = require('express');

const Projects = require('./projectmodel.js');
const Tasks = require('./tasksmodel.js');

const router = express.Router();


router.get('/', (req, res) => {
    Projects.find().then(projects => {
        res.status(200).json(projects.map(Projects.changeCompletedProperty));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting project' });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Projects.findById(id).then(project => {
        res.status(200).json(Projects.changeCompletedProperty(project));
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting project' });
    });
});


router.post('/', (req, res) => {
    const newProject = req.body;

    Projects.add(newProject)
    .then(project => {
      res.status(201).json(Projects.changeCompletedProperty(project));
    })
    .catch (err => {
      res.status(500).json({ message: 'error creating project' });
    });
  });


router.get('/:project_id/tasks', (req, res) => {
  const project_id = req.params.project_id;
  Tasks.findAllByProjectId(project_id)
  .then(tasks => {
    res.status(200).json(tasks.map(Projects.changeCompletedProperty));
  })
  .catch(err => {
    res.status(500).json({ message: 'error getting tasks' });
  });
});

router.get('/:project_id/tasks/:id', (req, res) => {
  const id = req.params.id;
  Tasks.findById(id)
  .then(task => {
    res.status(200).json(Projects.changeCompletedProperty(task));
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'error getting task' });
  });
});

router.post('/:id/tasks', (req, res) => {
  const id = req.params.id;
  const task = req.body;
  Tasks.add(task, id)
  .then(task => {
    res.status(200).json(Projects.changeCompletedProperty(task));
  })
  .catch(err => {
    console.log(err);
    res.status(500).json({ message: 'error getting task' });
  });
});

module.exports = router;