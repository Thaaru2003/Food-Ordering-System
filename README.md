# Food-Ordering-System
using a mongoDB,node.js
Project Title :- Food Ordering System

Problem Description :- In many small food businesses, orders are taken manually using phone calls or paper notes. This leads to:

Order confusion
Missing orders
Slow processing
No proper record of customer history

There is no centralized system to manage food orders efficiently.

Proposed Solution :- This project provides a web-based backend system using Node.js and MongoDB to manage food orders digitally.

It allows users to:

Create orders
View orders
Update order status
Delete orders

All data is stored securely in MongoDB.

Features :-
Create new food orders
View all orders
Update order details (status, quantity, etc.)
Delete orders
REST API based system
JSON response format

Technologies Used :-
 Node.js
Express.js
MongoDB
Mongoose
Postman (for API testing)

API Endpoints (with examples) :-
1. Create Order (POST)
POST /api/Order/create

Body:

{
  "customerName": "A.Aravinth.",
  "foodItem": "Hoppers",
  "quantity": 10,
  "price": 150,
  "address": "Moolai",
  "status": "Preparing"
}

2. Get All Orders (GET)
GET /api/Order/getall

3. Get Order by ID (GET)
GET /api/Order/:id

4. Update Order (PATCH)
PATCH /api/Order/update/:id

Body:

{
  "status": "Delivered"
}

5. Delete Order (DELETE)
DELETE /api/Order/delete/:id

Setup Instructions :-
i)Install Node.js
ii)Install MongoDB
iii)Clone the project:
    git clone <repo-link>
iv)Install dependencies:
    npm install

How to Run the Project :-
 Step 1: Start MongoDB

Make sure MongoDB is running locally or cloud (MongoDB Atlas)

Step 2: Start server
npm start

Server runs on:

http://localhost:8000

Step 3: Test in Postman

Use Postman to test:

POST (create order)
GET (view orders)
PATCH (update order)
DELETE (remove order)