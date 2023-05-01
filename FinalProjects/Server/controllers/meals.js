const express = require('express');
const model = require('../models/meals');
const router = express.Router();

router
    .get('/', (req, res) => {
        const list = model.getMeals();
        res.send(list)
    })

    .get('/:id', (req, res) => {
        const id = req.params.id;
        const meal = model.getMealbyId(id);
        res.send(meal)
    })

    .post('/', (req, res) => {
        const meal = req.body;

        console.log({meal});
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addMeal(meal);
        res.send('Meal added'+ meal)
    })

    .patch('/:id', (req, res) => {
        const meal = req.body;
        model.updateProduct(meal);
        res.send('Meal updated'+ meal);
    })

    .delete('/:id', (req, res) => {
        const id = req.params.id;
        model.deleteMeal(id);
        res.send({id});
    })

module.exports = router;
