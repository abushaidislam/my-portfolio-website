# Blog Backend with PostgreSQL

This is the backend for the Google-style blog website, built with Node.js, Express, and PostgreSQL.

## Features

- RESTful API for blog posts
- PostgreSQL database integration
- CRUD operations for blog posts
- Category-based filtering
- Environment-based configuration

## Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn package manager

## Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up the PostgreSQL database:
   - Create a database named `blog_db`
   - Update the `.env` file with your database credentials

4. Initialize the database:
   ```bash
   node setup/initDB.js
   ```

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
# Server Configuration
PORT=3000

# Database Configuration
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=blog_db
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

## Database Schema

The backend uses a single table for blog posts:

```sql
CREATE TABLE blog_posts (
  id SERIAL PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  content TEXT NOT NULL,
  category VARCHAR(100),
  author VARCHAR(100),
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## API Endpoints

### Get all blog posts
```
GET /api/blog/posts
```

### Get a specific blog post
```
GET /api/blog/posts/:id
```

### Get posts by category
```
GET /api/blog/categories/:category
```

### Get all categories
```
GET /api/blog/categories
```

### Create a new blog post
```
POST /api/blog/posts
```
Body:
```json
{
  "title": "Post Title",
  "content": "Post content",
  "category": "Technology",
  "author": "Author Name"
}
```

### Update a blog post
```
PUT /api/blog/posts/:id
```
Body:
```json
{
  "title": "Updated Title",
  "content": "Updated content",
  "category": "Updated Category"
}
```

### Delete a blog post
```
DELETE /api/blog/posts/:id
```

## Running the Application

### Development mode
```bash
npm run dev
```

### Production mode
```bash
npm start
```

The server will start on port 3000 (or the port specified in your .env file).

## Project Structure

```
.
├── config/
│   └── database.js          # Database configuration
├── models/
│   └── BlogPost.js          # Blog post model
├── routes/
│   └── blogRoutes.js        # API routes
├── setup/
│   └── initDB.js            # Database initialization script
├── .env                     # Environment variables
├── package.json             # Project dependencies
├── server.js                # Main server file
└── backend-README.md        # This file
```

## Frontend Integration

The backend serves the frontend files and provides API endpoints for dynamic content. The frontend can make requests to the API endpoints to fetch and manipulate blog data.

## License

This project is open source and available under the MIT License.