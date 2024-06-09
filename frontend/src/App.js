import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/Home';
import Course from './pages/Course';
import Problem from './pages/Problem';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';
import PrivateRoute from './components/PrivateRoute';
import './index.css';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from './redux/actions/authActions';

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <Router>
      <div className="App">
        <header className="header">
          <div className="logo">
            Tutorial Platform
          </div>
          <nav className="nav-links">
            <Link to="/">Home</Link>
            <Link to="/course">Tutorial</Link>
            {!isAuthenticated ? (
              <>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
              </>
            ) : (
              <>
                <Link to="/dashboard">Dashboard</Link>
                <span>{user.email}</span>
                <button onClick={handleLogout} className="btn logout-btn">Logout</button>
              </>
            )}
          </nav>
        </header>
        <main className="main">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/course" element={<Course />} />
            <Route path="/course/:id" element={<Problem />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/dashboard" element={<PrivateRoute component={Dashboard} />} />
          </Routes>
        </main>
        <footer className="footer">
          &copy; 2024 Tutorial Platform
        </footer>
      </div>
    </Router>
  );
}

export default App;
