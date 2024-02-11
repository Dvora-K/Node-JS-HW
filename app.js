const express = require('express');

const cakesRouter = require('./routes/cakesRouter');
const cookiesRouter = require('./routes/cookiesRouter');
// const recipesRouter = require('./routes/recipesRouter');

const app = express();

app.use('/cakes', cakesRouter);
app.use('/cookies', cookiesRouter);
// app.use('/recipe', recipesRouter)

app.get('/',(req,res)=>{
    res.send("HELLO")
})

app.listen(5000, () => {
    console.log('http://localhost:5000/')
})