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

function renderFeaturedPost(post) {
  const container = document.getElementById('featured-post-container');
  if (!container) return;

  container.innerHTML = `
    <div class="article-card featured">
      <div class="article-content">
        <div class="article-meta">
          <span class="category">${post.category}</span>
          <span class="date">${new Date(post.created_at).toLocaleDateString()}</span>
        </div>
        <h2 class="article-title">${post.title}</h2>
        <p class="article-excerpt">${post.content.substring(0, 200)}...</p>
        <a href="#" class="read-more" onclick="viewPost(${post.id})">Read Full Article</a>
      </div>
    </div>
  `;
}

function renderCategories(categories) {
  const container = document.getElementById('categories-container');
  if (!container) return;

  container.innerHTML = categories.map(category => `
    <a href="#" class="category-card" onclick="filterByCategory('${category.category}')">
      <div class="category-icon">
        <span class="material-icons">label</span>
      </div>
      <h3>${category.category}</h3>
      <p>${Math.floor(Math.random() * 10) + 5} articles</p>
    </a>
  `).join('');
}

function renderCategoryPosts(posts, categoryName) {
  const container = document.getElementById('category-posts-container');
  if (!container) return;

  const titleElement = document.getElementById('category-title');
  if (titleElement) {
    titleElement.textContent = `${categoryName} Articles`;
  }

  container.innerHTML = posts.map(post => `
    <article class="post-card">
      <div class="post-content">
        <div class="post-meta">
          <span class="date">${new Date(post.created_at).toLocaleDateString()}</span>
          <span class="category">${post.category}</span>
        </div>
        <h3 class="post-title"><a href="#">${post.title}</a></h3>
        <p class="post-excerpt">${post.content.substring(0, 150)}...</p>
        <a href="#" class="read-more">Read More</a>
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
  // Fetch and render all posts
  const posts = await fetchBlogPosts();
  renderBlogPosts(posts);
  
  // If we have posts, render the first one as featured
  if (posts.length > 0) {
    renderFeaturedPost(posts[0]);
  }
  
  // Fetch and render categories
  const categories = await fetchCategories();
  renderCategories(categories);
  
  // If we have categories, render posts for the first category
  if (categories.length > 0) {
    const categoryPosts = await fetchPostsByCategory(categories[0].category);
    renderCategoryPosts(categoryPosts, categories[0].category);
  }
}

// Filter posts by category
async function filterByCategory(category) {
  const posts = await fetchPostsByCategory(category);
  renderCategoryPosts(posts, category);
}

// View a specific post
function viewPost(id) {
  // This would typically navigate to a post detail page
  console.log('Viewing post:', id);
  // For now, we'll just log it
  // In a real app, you would redirect to a post detail page
  alert(`Viewing post with ID: ${id}`);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', initBlog);