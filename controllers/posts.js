const Post = require('../models/Post');

const getAllPost = async (req, res) => {
    try{
        const posts = await Post.find();
        console.log(posts);
    }catch(err){
        res.json({message: err});
    }
};

const submitPost = async (req, res) => {
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
};

const specificPost = async (req, res) =>{
    console.log(req.params.postId);
    try{
        const post = await Post.findById(req.params.postId);
        res.json(post);
    }catch(err){
        res.json({message: err});
    }
};

const deletePost = async (req, res) =>{
    try{
        const removePost = await Post.remove({_id: req.params.postId});
        res.json(removePost);
    }catch(err){
        res.json({message: err});
    }
}

const updatePost = async (req, res) =>{
    try{
        const updatePost = await Post.updateOne({_id: req.params.postId}, {$set: {title: req.body.title}});
        res.json(updatePost);
    }catch(err){
        res.json({message: err});
    }
};

exports.getAllPost = getAllPost;
exports.submitPost = submitPost;
exports.specificPost = specificPost;
exports.deletePost = deletePost;
exports.updatePost = updatePost;