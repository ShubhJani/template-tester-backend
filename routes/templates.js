const express = require('express');
const router = express.Router();
const Template = require('../models/Template');

// Get back all templates
router.get('/', async (req, res) => {
    try {
        const templates = await Template.find();
        res.json(templates);
    } catch(err) {
        res.json({ message: err})
    }
});

// Add a template
router.post('/', async (req, res) => {
    const templates = new Template({
        id: req.body.id,
        name: req.body.name,
        isApproved: req.body.isApproved,
        issues: req.body.issues
    });
    try {
        const savedTemplate = await templates.save();
        res.json(savedTemplate);
        // console.log(savedTemplate);
    } catch(err) {
        res.json({ message: err });
        // console.log(err);
    }
});

// Update a template
router.patch('/:TemplateId', async (req, res) => {
    try {
        const updatedTemplate = await Template.updateOne({ _id: req.params.TemplateId }, 
            { $set: { isApproved: req.body.isApproved } }
        );
        res.json(updatedTemplate);
    } catch (err) {
        res.json({ message: err })
    }
});

// Get specific post
// router.get('/:postId', async (req, res) => {
//     try {
//         const post = await Post.findById(req.params.postId);
//         res.json(post);
//     } catch (err) {
//         res.json({ message: err })
//     }
// });

// Delete a specific post
// router.delete('/:postId', async (req, res) => {
//     try {
//         const removedPost = await Post.deleteOne({_id: req.params.postId});
//         res.json(removedPost);
//     } catch (err) {
//         res.json({ message: err })
//     }
// })

module.exports = router;