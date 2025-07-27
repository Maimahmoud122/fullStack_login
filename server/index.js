import express from 'express';
import cors from 'cors';
import authRoutes from './routes/authRoute.js';

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());


app.use('/api/auth', authRoutes);


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
