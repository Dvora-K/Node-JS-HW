const express = require('express');
const cakesRouter = express.Router();
const recipesRouter = require('./recipesRouter');

cakesRouter.route('/')
    .get((req, res) => {
        res.send("success get/cakes ")
    })
    .post((req, res) => {
        res.send("success post/cakes ")
    });

cakesRouter.route('/:id')
    .get((req, res) => {
        res.send(`success get /cakes/${req.params.id}`)
    })
    .put((req, res) => {
        res.send(`success put /cakes/${req.params.id}`)
    })
    .delete((req, res) => {
        res.send(`success delete /cakes/${req.params.id}`)
    });

cakesRouter.use('/:id/recipe',recipesRouter)
module.exports = cakesRouter;