const express = require('express');

// database access using knex
const db = require('../data/db-config.js');

const router = express.Router();

const {isValidPost} = require('./post-service')

router.get('/', (req, res) => {
    // get a list of posts form the database
    db.select('*').from('posts')
        .then(posts => {
            res.status(200).json({ data: posts })
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        });
    // respond with the posts and 200

});

router.get('/:id', (req, res) => {
    db('posts')
        .where({ id: req.params.id })
        .first() // makes it return first record without the array
        .then(post => {
            if (post) {
                res.status(200).json({ data: post })

            } else {
                res.status(404).json({ message: "No post by that ID." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        });
});


router.post('/', (req, res) => {
    const post = req.body;

    // a post must have title and contents
    if (isValidPost(post)) {
        db('posts')
            .insert(post, "id") // there will be a warning in console about .return in sqlite3
            .then(ids => {
                console.log(res);
                res.status(201).json({ data: ids })
            })
            .catch(error => {
                console.log(error)
                res.status(500).json({ message: error.message })
            });
    } else {
        res.status(400).json({ message: "Please provide a valid title and description." })

    }

});

router.put('/:id', (req, res) => {
    const changes = req.body;
    //validate data
    db('posts')
        .where({ id: req.params.id })
        .update(changes)
        .then(count => {
            if (count > 0) {
                res.status(201).json({ data: count })
            } else {
                res.status(404).json({ message: "Message not found by that ID." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        })

});

router.delete('/:id', (req, res) => {
    db('posts')
        .where({ id: req.params.id })
        .del()
        .then(post => {
            if (post) {
                res.status(200).json({ data: post })

            } else {
                res.status(404).json({ message: "No post by that ID." })
            }
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({ message: error.message })
        });
});

module.exports = router;