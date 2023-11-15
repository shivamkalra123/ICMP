// Student_centre/courseTable.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useCourseContext } from './CourseContext';
import ParentComponent from './admin_nav'

const CourseTable = ({ location }) => {
  const { addCourse } = useCourseContext();
  const selectedSubCourses = location.state?.selectedSubCourses || [];
  const [expandedSubCourses, setExpandedSubCourses] = useState([]);

  const handleSubCourseClick = (subCourseId) => {
    setExpandedSubCourses((prevExpandedSubCourses) => {
      if (prevExpandedSubCourses.includes(subCourseId)) {
        return prevExpandedSubCourses.filter((id) => id !== subCourseId);
      } else {
        return [...prevExpandedSubCourses, subCourseId];
      }
    });
  };

  const handleAddCourseClick = (subCourse) => {
    console.log('Adding course:', subCourse);
    addCourse(subCourse);
    setExpandedSubCourses([]);
    alert('Course added successfully!');
  };

  return (
    <div>
      <div  className='course-content'>
      <h2>Selected Courses</h2>
      </div>
      <ParentComponent/>
      <table className='course-list-table'>
        <thead>
          <tr>
            <th>Course</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
          {selectedSubCourses.map((subCourse) => (
            <React.Fragment key={subCourse.id}>
              <tr style={{ height: expandedSubCourses.includes(subCourse.id) ? 'auto' : '50px' }}>
                <td
                  onClick={() => handleSubCourseClick(subCourse.id)}
                  style={{ cursor: 'pointer' }}
                >
                  {subCourse.title}
                </td>
                <td>{subCourse.description}</td>
              </tr>
              {expandedSubCourses.includes(subCourse.id) && (
                <React.Fragment>
                  <tr>
                    <td colSpan={2}>
                      <div>
                        <h3>{subCourse.title}</h3>
                        <p>{subCourse.summary}</p>
                        <button className='addcourse' onClick={() => handleAddCourseClick(subCourse)}>
                          Save To Worklist
                        </button>
                      </div>
                    </td>
                  </tr>
                </React.Fragment>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>

      {/* Add a button to redirect to AddCourse page */}
    
    </div>
  );
};

export default CourseTable;
