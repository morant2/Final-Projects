const express = require('express');
const model = require('../models/meals');
const router = express.Router();

router
    .get('/', (req, res) => {
        model.getMeals()
            .then(list => {

                const data = { data: list, total: list.length, isSuccess: true};
                res.send(data)
            })
            .catch(next);
        /*
        const list = model.getMeals();
        const data = { data: list, total: list.length, isSuccess: true};
        res.send(data)
        */
    })

    .get('/:id', (req, res) => {
        const id = req.params.id;
        const meal = model.getMealbyId(id);
        const data = { data: meal, isSuccess: true};
        res.send(data)
    })

    .post('/', (req, res) => {
        const meal = req.body;

        console.log({meal});
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addMeal(meal);
        const data = { data: meal, isSuccess: true};
        res.send('Meal added'+ data)
    })

    .patch('/:id', (req, res) => {
        const meal = req.body;
        model.updateProduct(meal);
        const data = { data: meal, isSuccess: true};
        res.send('Meal updated'+ data)
    })

    .delete('/:id', (req, res) => {
        const id = req.params.id;
        model.deleteMeal(id);
        const data = { data: id, isSuccess: true};
        res.send(data)
    })

module.exports = router;
