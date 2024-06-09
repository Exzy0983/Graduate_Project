import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const { email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(login({ email, password }));
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>로그인</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <input type="password" id="password" name="password" value={password} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">로그인</button>
      </form>
      <p>
        계정이 없으신가요? <Link to="/register">회원가입</Link>
      </p>
    </div>
  );
}

export default Login;
