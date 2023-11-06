// CoursePage.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Student_centre/admin_css/courses.css';
import ParentComponent from './admin_nav';

const SubCourseList = ({ subCourses, handleCheckboxChange }) => {
  return (
    <ul className="sub-course-list">
    {subCourses.map(subCourse => (
      <li key={subCourse.id}>
        <input 
          type="checkbox" 
          checked={subCourse.checked}
          onChange={() => handleCheckboxChange(subCourse)}
        />
         <a href="#">{subCourse.name}</a>
          <p>{subCourse.description}</p>
      
      </li>
    ))}
  </ul>
  );
};

const CourseList = ({ courses, handleCourseClick, handleCheckboxChange }) => {
  return (
    <div className="course-list-container">
      <table className="course-list-table">
        <thead>
          <tr>
            <th>Course</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {courses.map(course => (
            <tr key={course.id}>
              <td>
                <a href="#" onClick={(e) => handleCourseClick(e, course)}>{course.name}</a>
                {course.expanded && (
            <SubCourseList subCourses={course.subCourses} handleCheckboxChange={handleCheckboxChange} />
          )}
              </td>
              <td>{course.title}</td>
            </tr>
          ))}
        </tbody>
      </table>
     
    </div>
  );
};


const CoursePage = () => {
  const [courses, setCourses] = useState([
    {
      id: 1,
      name: 'CS50',
      title: 'Introduction to Computer Science',
      expanded: false,
      subCourses: [
        { id: 11, name: 'Fundamentals of Programming', title: 'CS50x', description: 'Introduction to the intellectual enterprises of computer science and the art of programming.' , checked: false},
        { id: 12, name: 'Web Development', title: 'CS50 Web', description: 'Learn to design and develop dynamic, secure, and high-performance web applications.', checked: false },
      ]
    },
    {
      id: 2,
      name: 'ECON 1010',
      title: 'Principles of Economics',
      expanded: false,
      subCourses: [
        { id: 21, name: 'Microeconomics', title: 'ECON 1011', description: 'Introduction to microeconomic theory and policy analysis.', checked: false },
        { id: 22, name: 'Macroeconomics', title: 'ECON 1012', description: 'Introduction to macroeconomic theory and policy analysis.', checked: false },
      ]
    },
    {
      id: 3,
      name: 'PSYCH 1',
      title: 'Introduction to Psychology',
      expanded: false,
      subCourses: [
        { id: 31, name: 'Social Psychology', title: 'PSYCH 15', description: 'Introduction to the systematic study of human behavior in social contexts.', checked: false },
        { id: 32, name: 'Abnormal Psychology', title: 'PSYCH 16', description: 'Introduction to the understanding and treatment of psychological disorders.', checked: false },
      ]
    },
    {
      id: 4,
      name: 'PHIL 1',
      title: 'Introduction to Philosophy',
      expanded: false,
      subCourses: [
        { id: 41, name: 'Ethics', title: 'PHIL 21', description: 'Introduction to fundamental problems in moral philosophy.', checked: false },
        { id: 42, name: 'Metaphysics', title: 'PHIL 22', description: 'Introduction to the study of reality, existence, and identity.', checked: false },
      ]
    }
  ]);

  const history = useHistory();

  const handleCourseClick = (e, clickedCourse) => {
    e.preventDefault();
    setCourses(prevCourses => prevCourses.map(course => ({
      ...course,
      expanded: course.id === clickedCourse.id ? !course.expanded : false
    })));
  };

  const handleCheckboxChange = (subCourse) => {
    setCourses(prevCourses => prevCourses.map(course => ({
      ...course,
      subCourses: course.subCourses.map(sc => 
        sc.id === subCourse.id ? { ...sc, checked: !sc.checked } : sc
      )
    })));
  };

  const handleSubCourseClick = () => {
    const selectedSubCourses = courses.flatMap(course => 
      course.subCourses.filter(subCourse => subCourse.checked)
    );
    const data = {
      selectedSubCourses
    };
    history.push({
      pathname: '/addCourse',
      state: { data }
    });
  };

  return (
    <div className="course-page">
   <ParentComponent/>
      <div className="course-content">
        <div className="course-list-container">
          <h2>Courses</h2>
          <CourseList courses={courses} handleCourseClick={handleCourseClick} handleCheckboxChange={handleCheckboxChange} />
        </div>
        <div className="sub-course-list-container">
          
                  <button className='selected_course' onClick={handleSubCourseClick}>Add Selected Courses</button>
        </div>
      </div>
    </div>
  );
};

export default CoursePage;
