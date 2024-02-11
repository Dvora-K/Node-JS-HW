const express = require('express');
const recipesRouter = express.Router();

recipesRouter.get('/', (req, res) => {
    res.send('success get/recipe')
})

recipesRouter.route('/:id/recipe')
    .get((req, res) => {
        res.send(`success get/recipe/${(req.params.id)}`)
    })
    .post('/:id', (req, res) => {
        res.send(`success post/recipe/${JSON.stringify(req.params.id)}`)
    })
    .put('/:id', (req, res) => {
        res.send(`success put/recipe/${JSON.stringify(req.params.id)}`)
    })
    .delete('/:id', (req, res) => {
        res.send(`success delete/recipe/${JSON.stringify(req.params.id)}`)
    });

module.exports = recipesRouter;