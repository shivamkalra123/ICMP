// CourseTable.js
import React from 'react';
import '../Student_centre/admin_css/courses.css'

const CourseTable = ({ courses, handleCheckboxChange }) => {
  return (
    <table className="course-table"> {/* Added className here */}
      <thead>
        <tr>
          <th className="course-header">Course</th> {/* Added className here */}
          <th className="credit-points">Credit Points</th> {/* Added className here */}
          <th className="select-checkbox">Select</th> {/* Added className here */}
        </tr>
      </thead>
      <tbody>
        {courses.map((course, index) => (
          <tr key={index} className="course-row"> {/* Added className here */}
            <td className="course-name">{course.name}</td> {/* Added className here */}
            <td className="course-credit">{course.creditPoints}</td> {/* Added className here */}
            <td className="select-checkbox">
              <input
                type="checkbox"
                onChange={() => handleCheckboxChange(course)}
              />
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CourseTable;
