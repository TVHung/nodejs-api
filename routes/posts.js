const express = require('express');
const router = express.Router();
const Post = require('../models/Post');
const verify = require('./verifyToken');



router.get('/', verify, async (req, res) => {
    res.send(req.user);

    //example
    // res.json({
    //     posts: {
    //         title: 'This is my first post',
    //         description: 'Ramdom description'
    //     }
    // });
});


//get back all the posts
// router.get('/', async (req, res) => {
//     try{
//         const posts = await Post.find();
//         console.log(posts);
//     }catch(err){
//         res.json({message: err});
//     }
// });


//submit a post
router.post('/', async (req, res) => {
    const post = new Post({
        title: req.body.title,
        description: req.body.description
    });

    try{
        const savedPost = await post.save();
        res.json(savedPost);
    }catch(err){
        res.json({message: err});
    }
});


//specific post
router.get('/:postId', async (req, res) =>{
    console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
});


// delete post
router.delete('/:postId', async (req, res) =>{
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message: err});
    }
});

// update a post
router.patch('/:postId', async (req, res) =>{
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
});


module.exports = router;