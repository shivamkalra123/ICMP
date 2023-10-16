import React from 'react';
import '../Student_centre/admin_css/courses.css';
import ParentComponent from './admin_nav';
import Footer from '../components/footer';

const Courses = () => {
  return (
    <div>
    <div className='count'>
      <ParentComponent/>
      <h1 className='courseHeading'>Courses</h1>
      <table>
        <thead>
          <tr>
            <th>SUBJECT</th>
            <th>CREDITS REQUIRED</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>English</td>
            <td>4.0</td>
          </tr>
          <tr>
            <td>Math (Integrated Math I, II, & III)</td>
            <td>3.0</td>
          </tr>
          <tr>
            <td>Science (Biology, Chemistry, Science Elective)</td>
            <td>3.0</td>
          </tr>
          <tr>
            <td>Social Studies</td>
            <td>3.0</td>
          </tr>
          <tr>
            <td>Visual and Performing Arts</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>Technology and Life Skills</td>
            <td>1.0</td>
          </tr>
          <tr>
            <td>Fitness and Health</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>Foreign Language</td>
            <td>2.0</td>
          </tr>
          <tr>
            <td>Electives/Advisory</td>
            <td>4.5</td>
          </tr>
          <tr>
            <td>TOTAL CREDITS</td>
            <td>24.5</td>
          </tr>
        </tbody>
      </table>  
      </div>

    </div>
  )
}

export default Courses;
