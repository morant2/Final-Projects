const express = require('express');
const model = require('../models/users');
const router = express.Router();

router
    .get('/', (req, res) => {
        model.getUsers()
            .then(list => {

                const data = { data: list, total: list.length, isSuccess: true};
                res.send(data)
            })
            .catch(next);
    } )

    .get('/:id', (req, res) => {
        const id = req.params.id;
        const user = model.getUserbyId(id);
        const data = { data: user, isSuccess: true};
        res.send(data)
    })

    .post('/', (req, res) => {
        const user = req.body;

        console.log({user});
        console.log( req.query );
        console.log( req.params );
        console.log( req.headers );

        model.addUser(user);
        const data = { data: user, isSuccess: true};
        res.send('User added'+ data)
    })

    .patch('/:id', (req, res) => {
        const user = req.body;
        model.updateUser(user);
        const data = { data: user, isSuccess: true};
        res.send('User updated'+ data)
    })

    .delete('/:id', (req, res) => {
        const id = req.params.id;
        model.deleteUser(id);
        const data = { data: id, isSuccess: true};
        res.send(data)
    })

    .post('/seed', (req, res, next) => {
        model.seed()
            .then(x => {
                const data = { data: x, isSuccess: true};
                res.send(data)
            }).catch(next);
    });

module.exports = router;