const express = require('express');
const router = express.Router();
const BlogPost = require('../models/BlogPost');

// GET /api/blog/posts - Get all blog posts
router.get('/posts', async (req, res) => {
  try {
    const posts = await BlogPost.getAll();
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/blog/posts/:id - Get a specific blog post
router.get('/posts/:id', async (req, res) => {
  try {
    const post = await BlogPost.getById(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/blog/categories/:category - Get posts by category
router.get('/categories/:category', async (req, res) => {
  try {
    const posts = await BlogPost.getByCategory(req.params.category);
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// GET /api/blog/categories - Get all categories
router.get('/categories', async (req, res) => {
  try {
    const categories = await BlogPost.getCategories();
    res.json(categories);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// POST /api/blog/posts - Create a new blog post
router.post('/posts', async (req, res) => {
  try {
    const post = await BlogPost.create(req.body);
    res.status(201).json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// PUT /api/blog/posts/:id - Update a blog post
router.put('/posts/:id', async (req, res) => {
  try {
    const post = await BlogPost.update(req.params.id, req.body);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json(post);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// DELETE /api/blog/posts/:id - Delete a blog post
router.delete('/posts/:id', async (req, res) => {
  try {
    const post = await BlogPost.delete(req.params.id);
    if (!post) {
      return res.status(404).json({ error: 'Post not found' });
    }
    res.json({ message: 'Post deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;