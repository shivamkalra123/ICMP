import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../Student_centre/admin_css/courses.css';
import ParentComponent from './admin_nav';
import CourseTable from './courseTable'; // Make sure the path is correct

const CoursePage = () => {
  const [courses] = useState([
    {
      id: 1,
      name: 'CS50',
      title: 'Introduction to Computer Science',
      expanded: false,
      subCourses: [
        // ... (previous subcourses)
        {
          id: 14,
          name: 'Algorithms',
          title: 'CS50 Algorithms',
          description: 'Study of algorithms and their computational complexity.',
          summary: 'Explores algorithm design and analysis techniques.',
          checked: false
        },
        {
          id: 15,
          name: 'Artificial Intelligence',
          title: 'CS50 AI',
          description: 'Introduction to the principles and practices of artificial intelligence.',
          summary: 'Covers topics such as machine learning and natural language processing.',
          checked: false
        },
        {
          id: 16,
          name: 'Computer Networks',
          title: 'CS50 Networks',
          description: 'Fundamentals of computer networking and data communication.',
          summary: 'Explores protocols, architectures, and network programming.',
          checked: false
        },
        {
          id: 17,
          name: 'Software Engineering',
          title: 'CS50 Software Engineering',
          description: 'Introduction to software engineering principles and practices.',
          summary: 'Covers topics such as software design, testing, and project management.',
          checked: false
        },
        {
          id: 18,
          name: 'Cybersecurity',
          title: 'CS50 Cybersecurity',
          description: 'Study of techniques for securing computer systems and networks.',
          summary: 'Explores topics such as cryptography, network security, and ethical hacking.',
          checked: false
        },
        {
          id: 19,
          name: 'Mobile App Development',
          title: 'CS50 Mobile',
          description: 'Introduction to mobile app development for iOS and Android.',
          summary: 'Covers mobile UI/UX design and development using popular frameworks.',
          checked: false
        },
        {
          id: 20,
          name: 'Database Systems',
          title: 'CS50 Databases',
          description: 'Fundamentals of database systems and data management.',
          summary: 'Explores relational databases, SQL, and database design principles.',
          checked: false
        },
      ]
    },
    {
      id: 2,
      name: 'ECON 1010',
      title: 'Principles of Economics',
      expanded: false,
      subCourses: [
        // ... (previous subcourses)
        {
          id: 24,
          name: 'Labor Economics',
          title: 'ECON 1014',
          description: 'Study of the labor market and employment dynamics.',
          summary: 'Examines issues such as wages, unemployment, and workforce policies.',
          checked: false
        },
        {
          id: 25,
          name: 'Behavioral Economics',
          title: 'ECON 1015',
          description: 'Integration of insights from psychology into economic theory.',
          summary: 'Explores how psychological factors influence economic decision-making.',
          checked: false
        },
        {
          id: 26,
          name: 'Environmental Economics',
          title: 'ECON 1016',
          description: 'Application of economic principles to environmental issues.',
          summary: 'Examines topics such as pollution, natural resource management, and sustainability.',
          checked: false
        },
        {
          id: 27,
          name: 'Health Economics',
          title: 'ECON 1017',
          description: 'Study of the economics of healthcare systems and policies.',
          summary: 'Explores issues such as healthcare financing, insurance, and access.',
          checked: false
        },
        {
          id: 28,
          name: 'Development Economics',
          title: 'ECON 1018',
          description: 'Analysis of economic development and global inequality.',
          summary: 'Covers topics such as poverty, economic growth, and international trade.',
          checked: false
        },
        {
          id: 29,
          name: 'Public Economics',
          title: 'ECON 1019',
          description: 'Study of government economic policies and their impact on society.',
          summary: 'Examines taxation, public spending, and welfare economics.',
          checked: false
        },
        {
          id: 30,
          name: 'Game Theory',
          title: 'ECON 1020',
          description: 'Introduction to the study of strategic decision-making.',
          summary: 'Explores applications in economics, politics, and other fields.',
          checked: false
        },
      ]
    },
  ]);

  const [selectedCourse, setSelectedCourse] = useState(null);
  const history = useHistory();

  const handleCourseClick = (clickedCourse) => {
    setSelectedCourse(clickedCourse);

    // Redirect to CourseTable page
    history.push({
      pathname: '/selectedSubCourses',
      state: { selectedSubCourses: clickedCourse.subCourses }
    });
  };

  return (
    <div className="course-page">
      <ParentComponent />
      <div>
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
                    <a onClick={() => handleCourseClick(course)}>
                      {course.name}
                    </a>
                  </td>
                  <td>{course.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Render CourseTable component only when a course is selected */}
        {selectedCourse && <CourseTable location={{ state: { data: selectedCourse.subCourses } }} />}
      </div>
    </div>
  );
};

export default CoursePage;
