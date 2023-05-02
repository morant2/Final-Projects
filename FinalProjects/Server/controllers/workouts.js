const express = require('express');
const model = require('../models/workouts');
const router = express.Router();

router
    .get('/', (req, res, next) => {
        model.getAll()
            .then(list => {

                const data = { data: list, total: list.length, isSuccess: true};
                res.send(data)
            })
            .catch(next);
    })

    .get('/:id', (req, res, next) => {
        model.getById(req.params.id)

            .then(x => {
                const data = { data: x, isSuccess: true};
                res.send(data)
            }).catch(next);
    })

    .post('/', (req, res, next) => {
        model.add(req.body)
            .then(x => {
                const data = { data: x, isSuccess: true};
                res.send(data)
            }).catch(next);
    })

    .patch('/', (req, res, next) => {
        model.update(req.body)
            .then(x => {
                const data = { data: x, isSuccess: true};
                res.send(data)
            }).catch(next);
    })

    .delete('/:id', (req, res) => {
        model.deleteItem(req.params.id)
            .then(x => {
                const data = { data: x, isSuccess: true};
                res.send(data)
            }).catch(next);
    })

    .post('/seed', (req, res, next) => {
        model.seed()
            .then(x => {
                const data = { data: x, isSuccess: true};
                res.send(data)
            }).catch(next);
    })

module.exports = router;