// Blog API functions
const API_BASE_URL = '/api/blog';

// Fetch all blog posts
async function fetchBlogPosts() {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    return [];
  }
}

// Fetch a specific blog post
async function fetchBlogPost(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`);
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error fetching blog post:', error);
    return null;
  }
}

// Fetch posts by category
async function fetchPostsByCategory(category) {
  try {
    const response = await fetch(`${API_BASE_URL}/categories/${category}`);
    const posts = await response.json();
    return posts;
  } catch (error) {
    console.error('Error fetching posts by category:', error);
    return [];
  }
}

// Fetch all categories
async function fetchCategories() {
  try {
    const response = await fetch(`${API_BASE_URL}/categories`);
    const categories = await response.json();
    return categories;
  } catch (error) {
    console.error('Error fetching categories:', error);
    return [];
  }
}

// Create a new blog post
async function createBlogPost(postData) {
  try {
    const response = await fetch(`${API_BASE_URL}/posts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error creating blog post:', error);
    return null;
  }
}

// Update a blog post
async function updateBlogPost(id, postData) {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(postData),
    });
    const post = await response.json();
    return post;
  } catch (error) {
    console.error('Error updating blog post:', error);
    return null;
  }
}

// Delete a blog post
async function deleteBlogPost(id) {
  try {
    const response = await fetch(`${API_BASE_URL}/posts/${id}`, {
      method: 'DELETE',
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error deleting blog post:', error);
    return null;
  }
}

// DOM manipulation functions
function renderBlogPosts(posts) {
  const container = document.getElementById('blog-posts-container');
  if (!container) return;

  container.innerHTML = posts.map(post => `
    <article class="article-card">
      <div class="article-content">
        <div class="article-meta">
          <span class="category">${post.category}</span>
          <span class="date">${new Date(post.created_at).toLocaleDateString()}</span>
        </div>
        <h3 class="article-title">${post.title}</h3>
        <p class="article-excerpt">${post.content.substring(0, 150)}...</p>
        <a href="#" class="read-more" onclick="viewPost(${post.id})">Read More</a>
      </div>
    </article>
  `).join('');
}

// View a specific post
function viewPost(id) {
  // This would typically navigate to a post detail page
  console.log('Viewing post:', id);
}

// Initialize the blog
async function initBlog() {
  const posts = await fetchBlogPosts();
  renderBlogPosts(posts);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlog);