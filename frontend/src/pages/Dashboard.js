import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../index.css';

const Dashboard = () => {
  const user = useSelector((state) => state.auth.user); // 가정: 사용자 정보는 auth 리듀서에 저장됨
  const tutorials = useSelector((state) => state.auth.tutorials); // 가정: 튜토리얼 정보는 auth 리듀서에 저장됨

  return (
    <div className="dashboard-container">
      <h1>Dashboard</h1>
      <div className="user-info">
        <h2>Welcome, {user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
      <div className="tutorials-info">
        <h2>Your Progress</h2>
        <div className="tutorials-list">
          {tutorials.map((tutorial) => (
            <div key={tutorial.id} className="tutorial-item">
              <Link to={`/course/${tutorial.id}`} className="tutorial-link">{tutorial.title}</Link>
              <p className={`tutorial-status ${tutorial.completed ? 'completed' : 'in-progress'}`}>
                {tutorial.completed ? 'Completed' : 'In Progress'}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
