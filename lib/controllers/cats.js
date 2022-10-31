const { Router } = require('express');
const { cats } = require('../cats-data');

module.exports = Router()

  .get('/', (req, res) => {
    const filteredCats = [];
    cats.map((cat) => {
      filteredCats.push({ id: cat.id, name: cat.name });
    });
    res.json(filteredCats);
  })

  .get('/:id', (req, res) => {
    const idMatch = cats.find((cat) => cat.id === req.params.id);
    res.json(idMatch);
    
  });

