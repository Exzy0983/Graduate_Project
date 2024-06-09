const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

const User = require('./models/User'); // User 모델 불러오기

const jwtSecret = process.env.JWT_SECRET || 'your_jwt_secret_key'; // JWT 비밀 키
const mongoUri = process.env.MONGO_URI || 'mongodb+srv://cjh00121500:8Om5arsh6i15wZbJ@cluster0.ab1dl1v.mongodb.net/'; // MongoDB 연결 문자열

mongoose.connect(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));

// 회원가입 엔드포인트
app.post('/api/register', async (req, res) => {
  const { name, email, password, gender, phone, address } = req.body;

  // 이메일 중복 체크
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'Email already exists' });
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    gender,
    phone,
    address,
  });

  await newUser.save();

  const token = jwt.sign({ id: newUser._id }, jwtSecret, { expiresIn: '1h' });

  res.json({ token, user: { id: newUser._id, name: newUser.name, email: newUser.email } });
});

// 로그인 엔드포인트
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    return res.status(400).json({ message: 'Invalid email or password' });
  }

  const token = jwt.sign({ id: user._id }, jwtSecret, { expiresIn: '1h' });

  res.json({ token, user: { id: user._id, name: user.name, email: user.email } });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
