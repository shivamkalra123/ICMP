import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import CourseTable from '../Student_centre/courseTable';
import ParentComponent from './admin_nav';

const CoursesPage = () => {
  const courses = [
    { name: 'Course A', creditPoints: 3 },
    { name: 'Course B', creditPoints: 4 },
    // Add more courses as needed
  ];

  const [selectedCourses, setSelectedCourses] = useState([]);
  const history = useHistory();

  const handleCheckboxChange = (course) => {
    setSelectedCourses(prevSelected => {
      const updatedSelected = prevSelected.includes(course)
        ? prevSelected.filter(c => c !== course)
        : [...prevSelected, course];
      return updatedSelected;
    });
  };

  const handleViewSelectedCourses = () => {
    const selectedCoursesString = JSON.stringify(selectedCourses);
    history.push(`/addCourse?selectedCourses=${selectedCoursesString}`);
  };

  return (
    <div>
      <ParentComponent/>
      <div className='course-tabl'>
      <h1>Courses Page</h1>
      <CourseTable courses={courses} handleCheckboxChange={handleCheckboxChange} />
      {selectedCourses.length > 0 && (
        <button onClick={handleViewSelectedCourses}>View Selected Courses</button>
      )}
      </div>
    </div>
  );
};

export default CoursesPage;
