const express = require('express');

const Resources = require('./resourcemodel.js');

const router = express.Router();

router.get('/', (req, res) => {
  Resources.find().then(resources => {
        res.status(200).json(resources);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting resources' });
    });
});

router.get('/:id', (req, res) => {
  const id = req.params.id;
  Resources.findById(id).then(resource => {
        res.status(200).json(resource);
    }).catch(err => {
        console.log(err);
        res.status(500).json({ message: 'error getting resource' });
    });
});


router.post('/', (req, res) => {
    const newResource = req.body;
    console.log(newResource);
    Resources.add(newResource)
    .then(resource => {
      res.status(201).json(resource);
    })
    .catch (err => {
      console.log(err)
      res.status(500).json({ message: 'error creating resource' });
    });
  });



module.exports = router;