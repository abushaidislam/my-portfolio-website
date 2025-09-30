const db = require('../config/database');

class BlogPost {
  // Get all blog posts
  static async getAll() {
    const query = 'SELECT * FROM blog_posts ORDER BY created_at DESC';
    const { rows } = await db.query(query);
    return rows;
  }

  // Get a blog post by ID
  static async getById(id) {
    const query = 'SELECT * FROM blog_posts WHERE id = $1';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  // Get blog posts by category
  static async getByCategory(category) {
    const query = 'SELECT * FROM blog_posts WHERE category = $1 ORDER BY created_at DESC';
    const { rows } = await db.query(query, [category]);
    return rows;
  }

  // Create a new blog post
  static async create(post) {
    const { title, content, category, author } = post;
    const query = 'INSERT INTO blog_posts(title, content, category, author, created_at, updated_at) VALUES($1, $2, $3, $4, NOW(), NOW()) RETURNING *';
    const { rows } = await db.query(query, [title, content, category, author]);
    return rows[0];
  }

  // Update a blog post
  static async update(id, post) {
    const { title, content, category } = post;
    const query = 'UPDATE blog_posts SET title = $1, content = $2, category = $3, updated_at = NOW() WHERE id = $4 RETURNING *';
    const { rows } = await db.query(query, [title, content, category, id]);
    return rows[0];
  }

  // Delete a blog post
  static async delete(id) {
    const query = 'DELETE FROM blog_posts WHERE id = $1 RETURNING *';
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  // Get all categories
  static async getCategories() {
    const query = 'SELECT DISTINCT category FROM blog_posts WHERE category IS NOT NULL';
    const { rows } = await db.query(query);
    return rows;
  }
}

module.exports = BlogPost;