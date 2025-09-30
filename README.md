# Google-Style Blog Template

A clean, responsive blog template inspired by Google's design principles. This template features a modern, minimalist design with a focus on readability and user experience.

## Backend with PostgreSQL

This project now includes a complete backend built with Node.js, Express, and PostgreSQL. The backend provides a RESTful API for managing blog posts and categories.

## Features

- **Google Material Design**: Clean, minimalist aesthetic with Google's design language
- **Fully Responsive**: Works on all device sizes from mobile to desktop
- **Multiple Pages**: Home, Article, Categories, About, and Contact pages
- **Modern CSS**: Uses CSS Grid and Flexbox for layouts
- **Google Fonts**: Roboto font for optimal readability
- **Material Icons**: Google's icon set for visual elements

## Pages Included

1. **Home Page** ([index.html](index.html)) - Main blog page with featured posts
2. **Article Page** ([article.html](article.html)) - Individual blog post template
3. **Categories Page** ([categories.html](categories.html)) - Category listing and filtering
4. **About Page** ([about.html](about.html)) - Information about the blog/team
5. **Contact Page** ([contact.html](contact.html)) - Contact form and information

## Technologies Used

### Frontend
- HTML5
- CSS3 (Flexbox and Grid)
- Google Fonts (Roboto)
- Material Icons
- Responsive Design

### Backend
- Node.js
- Express.js
- PostgreSQL
- RESTful API

## Getting Started

### Frontend Only
1. Clone or download this repository
2. Open `index.html` in your browser to view the blog
3. Customize the content to match your needs

### With Backend (PostgreSQL)
1. Clone or download this repository
2. Install dependencies: `npm install`
3. Set up PostgreSQL database and update `.env` file
4. Initialize database: `node setup/initDB.js`
5. Start server: `npm start`
6. Access the blog at `http://localhost:3000`

### Production Deployment
1. Clone or download this repository
2. Run the deployment script:
   - On Windows: `deploy.bat`
   - On Linux/Mac: `deploy.sh`
3. The script will automatically install dependencies, set up the database, and start the server
4. Access the blog at `http://localhost:3000`

## Customization

### Colors
The template uses Google's color palette:
- Primary: `#1a73e8` (Google Blue)
- Text: `#202124` (Dark Gray)
- Secondary Text: `#5f6368` (Medium Gray)
- Background: `#ffffff` (White)
- Light Background: `#f8f9fa` (Light Gray)

### Fonts
- **Primary Font**: Roboto (loaded from Google Fonts)
- **Font Weights**: 300, 400, 500, 700

### Layout
- **Container Width**: Max 1200px
- **Grid System**: CSS Grid and Flexbox
- **Breakpoints**: 
  - Tablet: 768px
  - Mobile: 480px

## File Structure

```
my-portfolio-website/
├── index.html          # Home page
├── article.html        # Article template
├── categories.html     # Categories page
├── about.html          # About page
├── contact.html        # Contact page
├── styles.css          # Main stylesheet
├── server.js           # Main server file
├── package.json        # Project dependencies
├── .env                # Environment variables
├── config/
│   └── database.js     # Database configuration
├── models/
│   └── BlogPost.js     # Blog post model
├── routes/
│   └── blogRoutes.js   # API routes
├── setup/
│   └── initDB.js       # Database initialization
├── README.md           # Frontend documentation
└── backend-README.md   # Backend documentation
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This template is open source and free to use for personal or commercial projects.

## Author

Created with inspiration from Google's design principles.