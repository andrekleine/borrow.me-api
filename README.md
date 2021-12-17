# Borrow.me App - Back end Application

This repository keeps the API application to perform all CRUD and Authentication operations for Borrow.me app.

## API Specs

- Stack used: Node, Express, Mongoose, Bcrypt, Yup, JsonWebToken, Eslint, Babel,
- Requests implemented: GET, POST, PUT, DELETE
- Public Routes: "/api/auth/register", "/api/auth/login"
- Private Routes:
  - "/api/books" 
  - "/api/reviews"

## API Documentation

- Endpoints Description:

| Route | HTTP Verb | Description | Body Request | Example Response | Status Code |
|:- |:- |:- |:- |:- |:- |
| /api/auth/register | POST | Register a new user based in informed params | `{"name":"John Doe","email":"john@doe.com","password":"123456"}` | ``{"_id":15,"name":"John Doe","email":"john@doe.com"}` | 201 |
| /api/auth/login | POST | Authenticates an user based on informed credentials, returning a JWT token | `{"email":"john@doe.com","password":"123456"}` | `{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzA4Njk2NzIsImlzcyI6IjE1In0.ZrpH4tzt2qdDtTFynj3ez2rIl8KM9cvmkI5AO1JOKps","role":"User"}` | 200 |
| /api/books/ | GET | Retrieves 3 arrays: Last 9 Books Read By Friends, Last 9 Books Friends Will Lend, Last 9 Books I Read | N/A | `{["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0], ["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0], ["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}` | 201 |
| /api/books/new-books-friends | GET | Retrieves up until last 60 Books Read By Friends | N/A | `{["_id": "61bcbeffc12e7aca7dc9fa61",			"title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}` | 201 |
| /api/books/friends-will-lend | GET | Retrieves up until last 60 Books Friends Will Lend | N/A | `{["_id": "61bcbeffc12e7aca7dc9fa61",			"title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}`| 201 |
| /api/books/read-recently | GET | Retrieves up until last 60 Books that the User Read Recently | N/A | `{["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}` | 201 |
| /api/books/{googleId} | GET | Retrieves 2 arrays: 1 - Returns book object if particular book is in user's read collection; 2 - Returns book object for each user who read and marked that book as "lendable"| N/A | `{["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}` | 201 |
| /api/books/{googleId} | POST | Saves new book object in user's read collection. Returns new saved book. | `{"title":"Some book","authors":["John Doe"],"description":"123","imgLink":"image.jpg","googleID":"5pBrVjZmGwoC"}` | `{["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}` | 201 |
| /api/books/{bookId} | PUT | Changes saved book properties. Returns modified saved book. | `{"lendable": "true"}` | `{["_id": "61bcbeffc12e7aca7dc9fa61", "title": "Some Book", "authors": ["John Doe"], "description": "A story where things happen", "imgLink": "http://image.jpg", "owner": "61bc9c8a2953dffd91f66666", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true, "createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0]}` | 201 |
| /api/books/{bookId} | DELETE | Deletes saved book from DB. | N/A | N/A | 204 |
| /api/reviews/{googleId} | GET | Retrieves user's review of a particular book | N/A | `[{"_id": "61bcbe17c12e7aca7dc9f555", "googleID": "HRSjDwAAQBAJ", "owner": "61bc97552953dffd91f66666", "stars": 3, "text": "Some text", "createdAt": "2021-12-17T16:43:03.332Z", "updatedAt":  "2021-12-17T16:43:03.332Z", "__v": 0 }]` | 201 |
| /api/reviews/{googleId} | POST | Saves user's review of a particular book. Returns new saved review. | `{"stars": 5, "text": "Some text"}` | `[{"_id": "61bcbe17c12e7aca7dc9f555", "googleID": "HRSjDwAAQBAJ", "owner": "61bc97552953dffd91f66666", "stars": 5, "text": "Some text", "createdAt": "2021-12-17T16:43:03.332Z", "updatedAt":  "2021-12-17T16:43:03.332Z", "__v": 0 }]` | 201 |
| /api/reviews/{reviewId} | PUT | Changes user's review of a particular book. Returns modified review.  | `{"stars": 1.5}` | `[{"_id": "61bcbe17c12e7aca7dc9f555", "googleID": "HRSjDwAAQBAJ", "owner": "61bc97552953dffd91f66666", "stars": 1.5, "text": "Some text", "createdAt": "2021-12-17T16:43:03.332Z", "updatedAt":  "2021-12-17T16:43:03.332Z", "__v": 0 }]` | 201 |
| /api/reviews/{reviewId} | DELETE | Deletes saved review from DB. | N/A | N/A | 204 |

## Running Locally

To run this API locally, please follow the below steps:

- You should have installed MongoDb Community Edition database in your machine. You may install it by following the steps inside the [official MongoDb documentation](https://docs.mongodb.com/manual/administration/install-community/)
- Clone this repository using with **git clone** command in your Terminal
- Create a .env file in the root path of this project and add the following variables:

```text
PORT=5000
MONGODB_URI=mongodb://localhost:27017/borrowme-api
LOGIN_TOKEN_SECRET=<ADD_YOUR_TOKEN_SECRET_HERE>
LOGIN_TOKEN_EXPIRATION=<ADD_YOUR_TOKEN_EXPIRATION_PERIOD_HERE>
```

- Install dependencies by running `npm install` command:
- Run project with `npm run dev`, and it will be available on the PORT defined inside you .env file

## Authors & Version Control

API developed by **André Kleine - [https://github.com/andrekleine](https://github.com/andrekleine)** - Borrow.me App Version 1.0_ - **Published in Dec-17th, 2021**
