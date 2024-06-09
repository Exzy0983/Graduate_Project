import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from '../redux/actions/authActions';
import { Link, useNavigate } from 'react-router-dom';
import '../index.css';

function Register() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
    gender: '',
    phone: '',
    address: '',
    showPassword: false,
    showPasswordConfirm: false,
  });

  const { name, email, password, passwordConfirm, gender, phone, address, showPassword, showPasswordConfirm } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = (field) => {
    setFormData({ ...formData, [field]: !formData[field] });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== passwordConfirm) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }
    try {
      await dispatch(register({ name, email, password, gender, phone, address }));
      navigate('/dashboard');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="auth-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">이름:</label>
          <input type="text" id="name" name="name" value={name} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">이메일:</label>
          <input type="email" id="email" name="email" value={email} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="password">비밀번호:</label>
          <div className="password-input">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle"
              onClick={() => togglePasswordVisibility('showPassword')}
            >
              {showPassword ? '🙈' : '👁️'}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="passwordConfirm">비밀번호 확인:</label>
          <div className="password-input">
            <input
              type={showPasswordConfirm ? "text" : "password"}
              id="passwordConfirm"
              name="passwordConfirm"
              value={passwordConfirm}
              onChange={handleChange}
              required
            />
            <span
              className="password-toggle"
              onClick={() => togglePasswordVisibility('showPasswordConfirm')}
            >
              {showPasswordConfirm ? '🙈' : '👁️'}
            </span>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="gender">성별:</label>
          <select id="gender" name="gender" value={gender} onChange={handleChange} required>
            <option value="">선택하세요</option>
            <option value="male">남성</option>
            <option value="female">여성</option>
            <option value="other">기타</option>
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="phone">전화번호:</label>
          <input type="tel" id="phone" name="phone" value={phone} onChange={handleChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">주소:</label>
          <input type="text" id="address" name="address" value={address} onChange={handleChange} required />
        </div>
        <button type="submit" className="btn">회원가입</button>
      </form>
      <p>
        이미 계정이 있으신가요? <Link to="/login">로그인</Link>
      </p>
    </div>
  );
}

export default Register;
