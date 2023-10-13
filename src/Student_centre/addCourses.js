import React, { useState } from 'react';
import '../Student_centre/admin_css/addCourse.css'; 
import ParentComponent from './admin_nav';
import { useHistory } from 'react-router-dom';

const AddDropCourses = () => {
    const history = useHistory();
  const [selectedCourses, setSelectedCourses] = useState([]);
  const [availableCourses] = useState([
    { id: 1, name: 'Course A' },
    { id: 2, name: 'Course B' },
    { id: 3, name: 'Course C' },
    { id: 4, name: 'Course D' },
    { id: 5, name: 'Course E' },
    { id: 6, name: 'Course F' },
  ]);

  const handleCourseSelection = (courseId) => {
    setSelectedCourses(prevCourses =>
      prevCourses.includes(courseId) ?
      prevCourses.filter(c => c !== courseId) :
      [...prevCourses, courseId]
    );
  };

  const handleAlertSelectedCourses = () => {
    const selectedCourseNames = availableCourses
      .filter(course => selectedCourses.includes(course.id))
      .map(course => course.name);
    
    alert(`Confirm Selected Courses:\n${selectedCourseNames.join('\n')} `);
    history.push('/student-centre');
  };

  return (
    <div className="add-drop-courses">
      <ParentComponent/>
      <h2>Add/Drop Courses</h2>
      <ul>
        {availableCourses.map(course => (
          <li key={course.id}>
            <label>
              <input 
                type="checkbox" 
                onChange={() => handleCourseSelection(course.id)} 
              />
              {course.name}
            </label>
          </li>
        ))}
      </ul>
      <button onClick={handleAlertSelectedCourses}>Select Courses</button>
      {selectedCourses.length > 0 && (
        <div>
          <h3>Selected Courses:</h3>
          <p>{selectedCourses.map(courseId => {
            const selectedCourse = availableCourses.find(course => course.id === courseId);
            return selectedCourse ? selectedCourse.name : '';
          }).join(', ')}</p>
        </div>
      )}
    </div>
  );
}

export default AddDropCourses;
