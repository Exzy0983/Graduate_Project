import React from 'react';
import { Link } from 'react-router-dom';
import courses from '../data/courses';

function Course() {
  return (
    <div>
      <h1 className="title">Coding Courses</h1>
      <p className="description">Select a course to start learning.</p>
      <div className="courses">
        {courses.map(course => (
          <div key={course.id} className="course">
            <h2>{course.title}</h2>
            <p>{course.description}</p>
            <Link to={`/course/${course.id}`} className="btn">문제 풀기</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Course;
