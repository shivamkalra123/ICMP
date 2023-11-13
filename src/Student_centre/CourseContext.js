// CourseContext.js

import React, { createContext, useContext, useState } from 'react';

const CourseContext = createContext();

export const CourseProvider = ({ children }) => {
  const [addedCourses, setAddedCourses] = useState([]);

  const addCourse = (course) => {
    setAddedCourses((prevCourses) => [...prevCourses, course]);
  };

  const removeCourse = (index) => {
    setAddedCourses((prevCourses) => {
      const newCourses = [...prevCourses];
      newCourses.splice(index, 1);
      return newCourses;
    });
  };

  return (
    <CourseContext.Provider value={{ addedCourses, addCourse, removeCourse }}>
      {children}
    </CourseContext.Provider>
  );
};

export const useCourseContext = () => {
  return useContext(CourseContext);
};
