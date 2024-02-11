const express = require('express');

const cookiesRouter = express.Router();
const recipesRouter = require('./recipesRouter');

cookiesRouter.route('/')
    .get((req, res) => {
        res.send("success get/cookies")
    })
    .post((req, res) => {
        res.send("success post/cookies ")
    });

cookiesRouter.route('/:id')
    .put((req, res) => {
        res.send(`success put /cookies/${JSON.stringify(req.params.id)}`)
    })
    .delete('/:id', (req, res) => {
        res.send(`success delete /cookies/${JSON.stringify(req.params.id)}`)

    })
    .get('/:id', (req, res) => {
        res.send(`success get /cookies/${JSON.stringify(req.params.id)}`)
    });

cookiesRouter.use('/:id/recipe', recipesRouter)

module.exports = cookiesRouter;