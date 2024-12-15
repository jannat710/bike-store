# Bike Store API

## Overview

This project is a Bike Store API developed using Express.js, TypeScript, and MongoDB with Mongoose for managing bike products and orders. It provides CRUD operations for bike products and order management, including inventory management, order creation, and revenue calculation.

## Features

- **Product Management**: Create, update, delete, and retrieve bikes.
- **Order Management**: Create orders, update stock, and handle insufficient stock.
- **Revenue Calculation**: Calculate total revenue from all orders.
- **Error Handling**: Proper validation and error responses.

### Technology Stack

- Express.js for API routing.
- TypeScript for type safety and code maintainability.
- MongoDB for storing products and orders.
- Mongoose for ODM (Object Data Modeling).
- ESLint for code linting.
- Prettier for code formatting.

## Setup

### Prerequisites

- Node.js (>= 16.0.0)
- MongoDB (local or MongoDB Atlas)

### Installation

1. Clone the repo:
   git clone https://github.com/yourusername/bike-store.git
   cd bike-store
2. Install dependencies:
   npm install

### Running the Application

## Development:

npm run start:dev

### Production:

1. Build:
   npm run build

2. Start:
   npm run start:prod

### Linting and Formatting

1. To lint your code:
   npm run lint

2. To automatically fix linting issues:
   npm run lint:fix

3. To format your code:
   npm run format

### API Endpoints

- Create a Bike: POST /api/products
- Get All Bikes: GET /api/products
  Query Parameters: searchTerm=<name|brand|category>
- Get Specific Bike: GET /api/products/:productId
- Update a Bike: PUT /api/products/:productId
- Delete a Bike: DELETE /api/products/:productId
- Order a Bike: POST /api/orders
- Revenue Calculation: GET /api/orders/revenue

### Live Deployment Link

https://bike-store-henna.vercel.app/
