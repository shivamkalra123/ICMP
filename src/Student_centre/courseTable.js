import React, { useState } from 'react';

const CourseTable = ({ location }) => {
  const selectedSubCourses = location.state?.selectedSubCourses || [];

  const [expandedSubCourses, setExpandedSubCourses] = useState([]);

  const handleSubCourseClick = (subCourseId) => {
    setExpandedSubCourses((prevExpandedSubCourses) => {
      if (prevExpandedSubCourses.includes(subCourseId)) {
        // If already expanded, collapse it
        return prevExpandedSubCourses.filter((id) => id !== subCourseId);
      } else {
        // If not expanded, expand it
        return [...prevExpandedSubCourses, subCourseId];
      }
    });
  };

  return (
    <div>
      <h2>Selected Courses</h2>
      <table className='course-list-table'>
        <thead>
          <tr>
            <th>Course</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {selectedSubCourses.map((subCourse) => (
            <React.Fragment key={subCourse.id}>
              <tr>
                <td
                  onClick={() => handleSubCourseClick(subCourse.id)}
                  colSpan={2} // Make the title span both columns
                  style={{ cursor: 'pointer' }}
                >
                  {subCourse.title}
                </td>
              </tr>
              {expandedSubCourses.includes(subCourse.id) && (
                <tr>
                  <td colSpan={2}>
                    <div>
                      <h1>{subCourse.title} - {subCourse.description}</h1>
                      <p>{subCourse.summary}</p>
                    </div>
                  </td>
                </tr>
              )}
            </React.Fragment>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CourseTable;
