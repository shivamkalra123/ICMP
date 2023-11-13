// Student_centre/addCourses.js

import React from 'react';
import { useCourseContext } from './CourseContext';
import { FaTrash } from 'react-icons/fa';

const AddCourse = () => {
  const { addedCourses, removeCourse } = useCourseContext();

  return (
    <div>
      <h2>Added Courses</h2>
      <table className='added-courses-table'>
        <thead>
          <tr>
            <th>Course</th>
            <th>Summary</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {addedCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.title}</td>
              <td>{course.summary}</td>
              <td>
                <button onClick={() => removeCourse(index)}>
                  <FaTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddCourse;
