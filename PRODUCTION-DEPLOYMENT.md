# Production Deployment Guide

This guide explains how to deploy the blog application to a production environment.

## Prerequisites

1. **Node.js** (v14 or higher)
2. **PostgreSQL** (v10 or higher)
3. **Git** (for cloning the repository)
4. **NPM** (comes with Node.js)

## System Requirements

- **Operating System**: Linux, macOS, or Windows
- **RAM**: Minimum 2GB
- **Disk Space**: Minimum 100MB
- **Network**: Internet access for downloading dependencies

## Installation Steps

### 1. Clone the Repository

```bash
git clone <repository-url>
cd my-portfolio-website
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env` file in the root directory with the following content:

```env
# Server Configuration
PORT=3000

# Database Configuration
DB_USER=your_postgres_username
DB_HOST=localhost
DB_NAME=blog_db
DB_PASSWORD=your_postgres_password
DB_PORT=5432
```

### 4. Set Up PostgreSQL Database

Make sure PostgreSQL is running, then:

```bash
npm run init-db
```

This will:
- Create the `blog_db` database (if it doesn't exist)
- Create the `blog_posts` table
- Insert sample data

### 5. Start the Application

For production:

```bash
npm start
```

For development (with auto-reload):

```bash
npm run dev
```

## Deployment Scripts

### Automated Deployment

On Linux/macOS:
```bash
./deploy.sh
```

On Windows:
```bash
deploy.bat
```

These scripts will:
1. Check for required dependencies
2. Install npm packages
3. Initialize the database
4. Start the server

## Application Structure

```
my-portfolio-website/
├── config/              # Configuration files
├── models/              # Database models
├── public/              # Static assets
├── routes/              # API routes
├── setup/               # Database setup scripts
├── views/               # HTML templates (if any)
├── .env                 # Environment variables
├── server.js            # Main application file
├── package.json         # Project dependencies
└── README.md            # Project documentation
```

## API Endpoints

### Health Check
- `GET /health` - Application health status

### Blog Posts
- `GET /api/blog/posts` - Get all blog posts
- `GET /api/blog/posts/:id` - Get a specific blog post
- `POST /api/blog/posts` - Create a new blog post
- `PUT /api/blog/posts/:id` - Update a blog post
- `DELETE /api/blog/posts/:id` - Delete a blog post

### Categories
- `GET /api/blog/categories` - Get all categories
- `GET /api/blog/categories/:category` - Get posts by category

## Database Schema

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

## Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| PORT | Server port | 3000 |
| DB_USER | PostgreSQL username | postgres |
| DB_HOST | Database host | localhost |
| DB_NAME | Database name | blog_db |
| DB_PASSWORD | Database password | postgres |
| DB_PORT | Database port | 5432 |

## Security Considerations

1. **Environment Variables**: Never commit sensitive data to version control
2. **Database Permissions**: Use a dedicated database user with minimal privileges
3. **HTTPS**: Use a reverse proxy (like Nginx) with SSL termination in production
4. **CORS**: Configure CORS settings appropriately for your domain
5. **Rate Limiting**: Consider implementing rate limiting for API endpoints

## Performance Optimization

1. **Database Indexes**: Add indexes on frequently queried columns
2. **Caching**: Implement caching for frequently accessed data
3. **Compression**: Enable gzip compression for responses
4. **Static Assets**: Serve static assets through a CDN in production

## Monitoring and Logging

- Application logs are output to stdout/stderr
- Use a process manager like PM2 for production
- Monitor server resources (CPU, memory, disk)
- Set up error tracking and alerting

## Backup and Recovery

1. **Database Backups**: Regularly backup your PostgreSQL database
2. **Static Assets**: Backup uploaded images and files
3. **Configuration**: Keep copies of environment files
4. **Version Control**: Maintain your code in a version control system

## Troubleshooting

### Common Issues

1. **Database Connection Failed**
   - Check PostgreSQL is running
   - Verify database credentials in `.env`
   - Ensure the database user has proper permissions

2. **Port Already in Use**
   - Change the PORT in `.env`
   - Kill the process using the port

3. **Missing Dependencies**
   - Run `npm install` again
   - Check Node.js version compatibility

### Logs

Check the console output for error messages. In production, redirect logs to files:

```bash
npm start > app.log 2>&1
```

## Scaling

For high-traffic applications:

1. **Load Balancing**: Use multiple instances behind a load balancer
2. **Database Connection Pooling**: Configure connection pools
3. **Caching Layer**: Add Redis for caching
4. **CDN**: Serve static assets through a CDN
5. **Database Read Replicas**: Use read replicas for scaling reads

## Updates and Maintenance

1. **Backup**: Always backup before updates
2. **Testing**: Test updates in a staging environment
3. **Rollback Plan**: Have a rollback plan for failed updates
4. **Monitoring**: Monitor application after updates

## Support

For issues and questions:
1. Check the documentation
2. Review logs for error messages
3. Search existing issues
4. Create a new issue with detailed information