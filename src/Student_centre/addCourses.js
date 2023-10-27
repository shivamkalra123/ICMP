import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import ParentComponent from './admin_nav';
import { FaTrash } from 'react-icons/fa';
import '../Student_centre/admin_css/addCourse.css';

const AddDropPage = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const selectedCoursesString = searchParams.get('selectedCourses');
  const [selectedCourses, setSelectedCourses] = useState(selectedCoursesString ? JSON.parse(selectedCoursesString) : []);

  const handleRemoveCourse = (index) => {
    const updatedCourses = [...selectedCourses];
    updatedCourses.splice(index, 1);
    setSelectedCourses(updatedCourses);
  };

  return (
    <div>
      <h1 className='selectedCourse'>Selected Courses</h1>
      <ParentComponent />
      <div className='vo'>
        <table className="course-table">
          <thead>
            <tr>
              <th className="course-header">Course</th>
              <th className="credit-points">Credit Points</th>
              <th className="select-checkbox">Select</th>
            </tr>
          </thead>
          <tbody>
            {selectedCourses.map((course, index) => (
              <tr key={index}>
                <td>{course.name}</td>
                <td>{course.creditPoints}</td>
                <td onClick={() => handleRemoveCourse(index)}>
                  <FaTrash />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddDropPage;
