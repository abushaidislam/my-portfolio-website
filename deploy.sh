#!/bin/bash

# Deployment script for the blog application

echo "Starting deployment process..."

# Check if Node.js is installed
if ! command -v node &> /dev/null
then
    echo "Node.js is not installed. Please install Node.js first."
    exit 1
fi

# Check if PostgreSQL is installed
if ! command -v psql &> /dev/null
then
    echo "PostgreSQL is not installed. Please install PostgreSQL first."
    exit 1
fi

# Install dependencies
echo "Installing dependencies..."
npm install

# Check if database exists, if not create it
echo "Setting up database..."
node setup/initDB.js

# Build the application (if needed)
echo "Building the application..."
# Add any build steps here if needed

# Start the server
echo "Starting the server..."
npm start

echo "Deployment completed successfully!"
echo "Your blog is now running at http://localhost:3000"