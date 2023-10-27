import React from 'react'

import Home from './components/home'
import Faq from './components/faq';

import { Route, Switch } from 'react-router-dom';
import About from './components/About';
import Health from './components/health';
import login from './components/login';
import student_centre from './Student_centre/student_centre';
import graduation from './Student_centre/graduation';
import AddDropCourses from './Student_centre/addCourses';
import Courses from './Student_centre/Courses';
import AddDropPage from './Student_centre/addCourses';



const App = () => {
  return (
    <div>
        
      
        <Switch>
        <Route path="/about-icmp" component={About} />
        <Route exact path="/" component={Home} />
        <Route exact path="/faq" component={Faq} />
        <Route exact path="/health" component={Health} />
        <Route exact path="/login" component={login} />
        <Route exact path="/student-centre" component={student_centre} />
        <Route exact path="/graduation" component={graduation} />
        <Route exact path="/courses" component={Courses} />
        <Route exact path="/addCourse" component={AddDropPage} 
        />
        {/* Add more routes as needed */}
      </Switch>
      
    </div>
  )
}

export default App