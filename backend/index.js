
import express from 'express';
import cors from 'cors';

const app = express();
const PORT = 5050;

app.use(cors());

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', price: 10.99 },
  { id: 2, title: '1984', author: 'George Orwell', price: 9.99 },
  { id: 3, title: 'To Kill a Mockingbird', author: 'Harper Lee', price: 12.5 }
];

app.get('/api/books', (req, res) => {
  res.json(books);
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
