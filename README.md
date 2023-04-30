# Simple CRUD REST API with Node.js and Express 📝🚀

This is a simple CRUD REST API built with Node.js and Express. It uses an in-memory array to store data, so it will not persist data after the server is stopped. It is intended to be used as a starting point for learning how to build a REST API with Node.js and Express. 💻📚

## Built With 🛠️
- [Node.js](https://nodejs.org/en/) - JavaScript runtime
- [Express](https://expressjs.com/) - Web framework for Node.js
- [Nodemon](https://nodemon.io/) - Utility to monitor for changes and automatically restart the server

## Endpoints 🛣️
- GET all data 📄 : GET /
- GET data by ID 🔎 : GET /:id
- POST new data ✍️ : POST /
- PUT update data by ID ✏️ : PUT /:id
- DELETE data by ID 🗑️ : DELETE /:id

## Data Structure 📊
The data is stored as an array of objects, where each object represents a book. Each book has the following properties:

- id (integer): a unique identifier for the book
- title (string): the title of the book
- author (string): the author of the book
- genre (string): the genre of the book

## How to Run 🏃‍♀️🏃‍♂️
1. Install dependencies: npm install
2. Run the server: npm start
3. Make requests to http://localhost:3000

## How to Use 🤔

If your using vscode, you can use the [Thunder Client](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client) extension to make requests to the API. You can also use [Postman](https://www.postman.com/).

### GET all data 📄
Make a GET request to http://localhost:3000 to get all data.

### GET data by ID 🔎
Make a GET request to http://localhost:3000/:id to get data by ID.

### POST new data ✍️
Make a POST request to http://localhost:3000 with the following JSON data in the request body to create a new data entry:

```
{
  "title": "string",
  "author": "string",
  "genre": "string"
}
```

### PUT update data by ID ✏️
Make a PUT request to http://localhost:3000/:id with the following JSON data in the request body to update data by ID:

```
{
  "title": "string",
  "author": "string",
  "genre": "string"
}
```

### DELETE data by ID 🗑️
Make a DELETE request to http://localhost:3000/:id to delete data by ID.

## Author 👩‍💻👨‍💻
**[Saurav Hathi](https://github.com/sauravhathi)**

## License 📄
This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/sauravhathi/nodejs-express-crud-api/blob/master/LICENSE) file for details