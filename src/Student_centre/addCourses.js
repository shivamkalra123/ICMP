// Student_centre/addCourses.js

import React from 'react';
import { useCourseContext } from './CourseContext';
import { FaTrash } from 'react-icons/fa';
import ParentComponent from './admin_nav';

const AddCourse = () => {
  const { addedCourses, removeCourse } = useCourseContext();

  return (
    <div>
      <div className='course-content'>
      <h2>Added Courses</h2>
      </div>
      <ParentComponent/>
      <table className='course-list-table'>
        <thead>
          <tr>
            <th>ID</th>
            <th>Course</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {addedCourses.map((course, index) => (
            <tr key={index}>
              <td>{course.id}</td>
              <td>{course.title}</td>
              <td>
                <a onClick={() => removeCourse(index)}>
                  <FaTrash />
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddCourse;
