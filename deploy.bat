@echo off
title Blog Deployment Script

echo Starting deployment process...

REM Check if Node.js is installed
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo Node.js is not installed. Please install Node.js first.
    pause
    exit /b 1
)

REM Check if PostgreSQL is installed
psql --version >nul 2>&1
if %errorlevel% neq 0 (
    echo PostgreSQL is not installed. Please install PostgreSQL first.
    pause
    exit /b 1
)

REM Install dependencies
echo Installing dependencies...
npm install

REM Check if database exists, if not create it
echo Setting up database...
node setup/initDB.js

REM Build the application (if needed)
echo Building the application...
REM Add any build steps here if needed

REM Start the server
echo Starting the server...
npm start

echo Deployment completed successfully!
echo Your blog is now running at http://localhost:3000
pause