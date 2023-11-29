import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Home from "./components/home";
import Faq from "./components/faq";
import About from "./components/About";
import Health from "./components/health";
import login from "./components/login";
import student_centre from "./Student_centre/student_centre";
import graduation from "./Student_centre/graduation";
import Courses from "./Student_centre/Courses";
import courseTable from "./Student_centre/courseTable";
import AddCourse from "./Student_centre/addCourses";
import { CourseProvider } from "./Student_centre/CourseContext";
import Academics from "./components/Academics";
import Strategic from "./components/Strategy";
import News from "./components/News";
import Research from "./components/Research";

const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Dynamically set the document title based on the current route
    const route = location.pathname.substring(1);
    document.title = route.charAt(0).toUpperCase() + route.slice(1);
  }, [location]);

  return (
    <Router>
      <CourseProvider>
        <Switch>
          <Route path="/about-icmp" component={About} />
          <Route exact path="/" component={Home} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/health" component={Health} />
          <Route exact path="/login" component={login} />
          <Route exact path="/student-centre" component={student_centre} />
          <Route exact path="/graduation" component={graduation} />
          <Route exact path="/courses" component={Courses} />
          <Route path="/addCourse" component={AddCourse} />
          <Route path="/selectedSubCourses" component={courseTable} />
          <Route path="/academic" component={Academics} />
          <Route path="/strategy" component={Strategic} />
          <Route path="/news" component={News} />
          <Route path="/research" component={Research} />
        </Switch>
      </CourseProvider>
    </Router>
  );
};

export default App;
