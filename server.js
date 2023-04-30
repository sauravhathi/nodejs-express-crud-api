const express = require('express');
const app = express();
app.use(express.json());

let data = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', genre: 'Literary Fiction' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', genre: 'Southern Gothic' },
    { id: 3, title: '1984', author: 'George Orwell', genre: 'Dystopian Fiction' },
    { id: 4, title: 'Pride and Prejudice', author: 'Jane Austen', genre: 'Romance' },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', genre: 'Coming-of-Age Fiction' },
    { id: 6, title: 'The Lord of the Rings', author: 'J.R.R. Tolkien', genre: 'High Fantasy' },
    { id: 7, title: 'The Hobbit', author: 'J.R.R. Tolkien', genre: 'High Fantasy' },
    { id: 8, title: 'The Adventures of Huckleberry Finn', author: 'Mark Twain', genre: 'Adventure Fiction' },
    { id: 9, title: 'The Adventures of Tom Sawyer', author: 'Mark Twain', genre: 'Adventure Fiction' },
    { id: 10, title: 'Moby-Dick', author: 'Herman Melville', genre: 'Adventure Fiction' },
    { id: 11, title: 'Frankenstein', author: 'Mary Shelley', genre: 'Gothic Fiction' }
];

// GET all data
app.get('/', (req, res) => {
    console.log('📄 Fetching all data...\n');
    const updatedData = data.map(obj => {
        const { id, ...rest } = obj;
        return { id, ...rest };
    });
    res.json(updatedData);
});

// GET data by ID
app.get('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const item = data.find(item => item.id === id);
    if (item) {
        console.log(`🔎 Fetching data with ID ${id}...\n`);
        res.json(item);
    } else {
        console.log(`❌ Data with ID ${id} not found.\n`);
        res.sendStatus(404);
    }
});

// POST new data
app.post('/', (req, res) => {
    const item = req.body;
    item.id = data.length + 1;
    data.push(item);
    console.log('✍️ Adding new data...\n');
    res.json(item);
});

// PUT update data by ID
app.put('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data[index] = { ...data[index], ...req.body };
        console.log(`✏️ Updating data with ID ${id}...\n`);
        res.json(data[index]);
    } else {
        console.log(`❌ Data with ID ${id} not found.\n`);
        res.sendStatus(404);
    }
});

// DELETE data by ID
app.delete('/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = data.findIndex(item => item.id === id);
    if (index !== -1) {
        data.splice(index, 1);
        res.sendStatus(204);
        console.log(`🗑️ Deleted book with ID ${id}\n`);
    } else {
        res.sendStatus(404);
        console.log(`❌ Book with ID ${id} not found\n`);
    }
});

// start server
const port = 3000;
app.listen(port, () => {
    console.log(`\n🚀 Server running on port http://localhost:${port}`);
});