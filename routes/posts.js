const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verify = require('./verifyToken');
const {getAllPost, submitPost, specificPost, deletePost, updatePost} = require('../controllers/posts');

//return ...
// router.get('/', verify, async (req, res) => {
//     res.send(req.user);
    // example
    // res.json({
    //     posts: {
    //         title: 'This is my first post',
    //         description: 'Ramdom description'
    //     }
    // });
// });


//get back all the posts
router.get('/', getAllPost);


//submit a post
router.post('/', submitPost);


//specific post
router.get('/:postId', specificPost);


// delete post
router.delete('/:postId', deletePost);


// update a post
router.patch('/:postId', updatePost);


module.exports = router;