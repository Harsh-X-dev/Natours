# Natours

Natours is a fictional tour booking application built with Node.js, Express, MongoDB, and server-side rendered templates.

## Features

- User authentication and authorization
- Browse and book tours
- Secure payments
- Tour reviews and ratings
- Responsive user interface

## Tech Stack

- Node.js
- Express
- MongoDB
- Mongoose
- Pug
- HTML, CSS, JavaScript

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `config.env` file in the project root and add the required variables.

Example:

```env
NODE_ENV=development
PORT=3000
DATABASE=<database-connection-string>
DATABASE_PASSWORD=<database-password>
```

### Run the Application

```bash
npm start
```

For development:

```bash
npm run dev
```

## Project Structure

- `config/` - App configuration
- `controllers/` - Route controllers
- `models/` - Database models
- `routes/` - Express routes
- `views/` - Pug templates
- `public/` - Static files

