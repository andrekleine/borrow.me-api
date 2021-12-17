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

| Route                     | HTTP Verb | Description                                                                            | Body Request                                                                   | Example Response                                                                                                                                                                                                                                 | Status Code |
| :------------------------ | :-------- | :------------------------------------------------------------------------------------- | :----------------------------------------------------------------------------- | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :---------- |
| /api/auth/register        | POST      | Register a new user based in informed params                                           | `{"name":"John Doe","email":"john@doe.com","password":"123456"}`               | ``{"_id":15,"name":"John Doe","email":"john@doe.com"}`                                                                                                                                                                                           | 201         |
| /api/auth/login           | POST      | Authenticates an user based on informed credentials, returning a JWT token             | `{"email":"john@doe.com","password":"123456"}`                                 | `{"token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJleHAiOjE2MzA4Njk2NzIsImlzcyI6IjE1In0.ZrpH4tzt2qdDtTFynj3ez2rIl8KM9cvmkI5AO1JOKps","role":"User"}`                                                                                             | 200         |
| /api/projects             | GET       | Retrieves a list of projects created by token owner. Can filter results by title param | N/A                                                                            | `[{"_id":"619d47d7019101e90cca69a2","title":"Project 1","description":"Description project 1","tasks":[],"owner":"6197f5cd6dc9fbeac71d55d1","createdAt":"2021-11-23T19:58:15.274Z","updatedAt":"2021-11-23T19:58:15.274Z","__v":0}]`             | 200         |
| /api/books/ | GET       | Retrieves 3 arrays: Last 9 Books Read By Friends, Last 9 Books Friends Will Lend, Last 9 Books I Read                                           | N/A                                                                            | `{"_id": "61bcbeffc12e7aca7dc9fa61",
			"title": "A Metamorfose", "authors": ["Franz Kafka"], "description": "«Certa manhã, ao acordar após sonhos agitados, Gregor Samsa viu-se na sua cama, metamorfoseado num monstruoso insecto.» É assim que começa A Metamorfose, uma das mais emblemáticas obras de Franz Kafka. Nesta narrativa, o autor recorre à terrível metamorfose física e ao desespero da personagem para abordar os temas transversais a toda a sua obra: o comportamento humano, a impotência perante o absurdo e a frustração provocada por uma sociedade opressora e burocrática.", "imgLink": "http://books.google.com/books/content?id=7RmuAAAAQBAJ&printsec=frontcover&img=1&zoom=1&edge=curl&source=gbs_api", "owner": "61bc9c8a2953dffd91f660e0", "googleID": "7RmuAAAAQBAJ", "read": true, "lendable": true,
			"createdAt": "2021-12-17T16:46:55.710Z", "updatedAt": "2021-12-17T16:46:56.803Z", "__v": 0}`               | 200         |

## Running Locally

To run this API locally, please follow the below steps:

- You should have installed MongoDb Community Edition database in your machine. You may install it by following the steps inside the [official MongoDb documentation](https://docs.mongodb.com/manual/administration/install-community/)
- Clone this repository using with **git clone** command in your Terminal
- Create a .env file in the root path of this project and add the following variables:

```text
PORT=5050
MONGODB_URI=mongodb://localhost:27017/projety-api
LOGIN_TOKEN_SECRET=<ADD_YOUR_TOKEN_SECRET_HERE>
LOGIN_TOKEN_EXPIRATION=<ADD_YOUR_TOKEN_EXPIRATION_PERIOD_HERE>
```

- Install dependencies by running `npm install` command:
- Run project with `npm run dev`, and it will be available the PORT defined inside you .env file

## Authors & Version Control

API developed by **Henrique Guazzelli Mendes - [https://github.com/henriquegmendes](https://github.com/henriquegmendes)** - _Projety-API App Version 1.0_ - **Published in Nov-24th of 2021**
