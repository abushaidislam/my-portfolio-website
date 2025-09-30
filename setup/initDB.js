const db = require('../config/database');

// Create blog_posts table
const createBlogPostsTable = `
  CREATE TABLE IF NOT EXISTS blog_posts (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    content TEXT NOT NULL,
    category VARCHAR(100),
    author VARCHAR(100),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

// Insert sample data
const insertSampleData = `
  INSERT INTO blog_posts (title, content, category, author, created_at, updated_at) VALUES
  ('The Future of Web Development: Trends to Watch in 2023', 'Explore the latest trends in web development that are shaping the digital landscape. From progressive web apps to serverless architectures, discover what''s next in the world of web development.', 'Technology', 'John Doe', NOW(), NOW()),
  ('Mastering UI/UX Design Principles', 'Learn the fundamental principles of effective UI/UX design that can transform your digital products and enhance user satisfaction.', 'Design', 'Jane Smith', NOW(), NOW()),
  ('Building Scalable APIs with Node.js', 'Discover best practices for creating robust and scalable APIs using Node.js and Express framework.', 'Development', 'Mike Johnson', NOW(), NOW()),
  ('Essential Cybersecurity Practices for 2023', 'Protect your digital assets with these essential cybersecurity practices that every organization should implement.', 'Security', 'Sarah Williams', NOW(), NOW()),
  ('Machine Learning Applications in Everyday Life', 'Explore how machine learning algorithms are silently improving our daily experiences in unexpected ways.', 'AI', 'David Brown', NOW(), NOW()),
  ('Getting Started with React Hooks', 'Learn how to use React Hooks to simplify your functional components and manage state more effectively.', 'Development', 'Alice Johnson', NOW(), NOW()),
  ('CSS Grid vs Flexbox: When to Use Which', 'Understanding the differences between CSS Grid and Flexbox and when to use each layout method for optimal results.', 'Design', 'Bob Smith', NOW(), NOW()),
  ('The Rise of Progressive Web Apps', 'Explore how Progressive Web Apps are bridging the gap between web and mobile applications.', 'Technology', 'Carol Davis', NOW(), NOW()),
  ('Introduction to Docker for Developers', 'Learn the basics of containerization with Docker and how it can improve your development workflow.', 'Development', 'David Wilson', NOW(), NOW()),
  ('Best Practices for Responsive Design', 'Discover the essential techniques for creating websites that look great on all devices.', 'Design', 'Eva Martinez', NOW(), NOW())
  ON CONFLICT DO NOTHING;
`;

async function initDB() {
  try {
    // Create table
    await db.query(createBlogPostsTable);
    console.log('Blog posts table created successfully');

    // Insert sample data
    await db.query(insertSampleData);
    console.log('Sample data inserted successfully');

    console.log('Database initialization completed');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Run the initialization
initDB();