import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
dotenv.config();

const users = []; 

const SECRET = process.env.JWT_SECRET;


export const register = async (req, res) => {
  const { name, email, password } = req.body;

  const exists = users.find(u => u.email === email);
  if (exists) return res.status(400).json({ error: 'Email already registered' });

  const hashedPassword = await bcrypt.hash(password, 10);
  const user = { id: users.length + 1, name, email, password: hashedPassword };
  users.push(user);

  res.json({ message: 'User registered successfully' });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (!user || !(await bcrypt.compare(password, user.password))) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ userId: user.id }, SECRET, { expiresIn: '1h' });

  res.json({ token, user: { id: user.id, name: user.name, email: user.email } });
};

export const getProfile = (req, res) => {
  const user = users.find(u => u.id === req.userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  res.json({ id: user.id, name: user.name, email: user.email });
};
