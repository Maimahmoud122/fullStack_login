
import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Books = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const res = await axios.get('http://localhost:5050/api/books');
        setBooks(res.data);
        setLoading(false);
      } catch (err) {
        console.error('Error fetching books:', err);
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  if (loading) return <p>Loading books...</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Available Books</h2>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <strong>{book.title}</strong> by {book.author} - ${book.price}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;
