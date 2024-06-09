import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';

function Problem() {
  const { id } = useParams();
  const course = courses.find(course => course.id === parseInt(id));
  const [answer, setAnswer] = useState('');
  const [language, setLanguage] = useState(course.languages[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const correctAnswer = course.correctAnswer[language];
    if (answer.trim() === correctAnswer.trim()) {
      showAlert('정답입니다!', 'success');
    } else {
      showAlert(`오답입니다. 정답은:\n${correctAnswer}`, 'error');
    }
  };

  const showAlert = (message, type) => {
    const alertElement = document.getElementById('alert');
    alertElement.textContent = message;
    alertElement.className = `alert alert-${type}`;
    alertElement.style.display = 'block';

    setTimeout(() => {
      alertElement.style.display = 'none';
    }, 3000);
  };

  return (
    <div>
      <h1 className="title">{course.title}</h1>
      <p className="description">{course.description}</p>
      <h2 className="problem-title">문제</h2>
      <p className="problem-description">{course.problem}</p>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="language">언어 선택:</label>
          <select id="language" value={language} onChange={(e) => setLanguage(e.target.value)}>
            {course.languages.map(lang => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
        </div>
        <div>
          <textarea
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="여기에 코드를 입력하세요"
            className="textarea"
          />
        </div>
        <button type="submit" className="btn">제출</button>
      </form>
      <div id="alert" className="alert"></div>
    </div>
  );
}

export default Problem;
