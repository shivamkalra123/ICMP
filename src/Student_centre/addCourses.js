import React, { useState } from 'react';
import { FaTrash } from 'react-icons/fa';
import ParentComponent from '../Student_centre/admin_nav'

const AddCourse = (props) => {
  const { selectedCourses, selectedSubCourses } = props.location.state.data;

  const [coursesData, setCoursesData] = useState({
    selectedCourses,
    selectedSubCourses
  });

  const handleDeleteRow = (index) => {
    const updatedSelectedCourses = [...coursesData.selectedCourses];
    const updatedSelectedSubCourses = [...coursesData.selectedSubCourses];

    updatedSelectedCourses.splice(index, 1);
    updatedSelectedSubCourses.splice(index, 1);

    setCoursesData({
      selectedCourses: updatedSelectedCourses,
      selectedSubCourses: updatedSelectedSubCourses
    });
  };

  return (
    <div>
      <ParentComponent/>
      <table className='course-list-table'>
        <thead>
          <tr>
            <th>Courses</th>
            <th>SubCourses</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {coursesData.selectedCourses.map((course, index) => (
            <tr key={course.id}>
              <td>{course.name}</td>
              <td>{coursesData.selectedSubCourses[index].name}</td>
              <td>
                <FaTrash onClick={() => handleDeleteRow(index)} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AddCourse;
