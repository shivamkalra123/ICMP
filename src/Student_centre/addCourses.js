// AddCoursePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';

const AddCoursePage = () => {
  const location = useLocation();
  const { selectedCourse, selectedSubCourses } = location.state.data;

  return (
    <div>
      <h1>Add Course Page</h1>
      <div>
        <h2>Selected Course: {selectedCourse}</h2>
        <h2>Selected Sub-Courses:</h2>
        <ul>
          {selectedSubCourses.map(subCourse => (
            <li key={subCourse.id}>{subCourse.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AddCoursePage;
