import React from 'react';
import { FaHome, FaMap, FaCalendar, FaGraduationCap,FaBookOpen } from 'react-icons/fa';
import Logo from '../media/logo.png';
import '../Student_centre/admin_css/admin_nav.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


const SideNavBar = () => {
  return (
    <div className="sidenav">
      <Link to='/student-centre' href="#">
        <FaHome />
        Home
      </Link>
      <Link to="/graduation" href="#">
        <FaGraduationCap />
        Graduation
      </Link>
      <Link to="/courses" href="#">
        <FaBookOpen  />
        Courses
      </Link>
      <Link to="/addCourse" href="#">
        <FaBookOpen  />
        Add/Drop Courses
      </Link>
      <a href="#">
        <FaMap />
        Map
      </a>
      <a href="#">
        <FaCalendar />
        Planner
      </a>
      
    </div>
  );
};

const ParentComponent = () => {
  return (
    <div>
      <SideNavBar />
    </div>
  );
};

export default ParentComponent;
