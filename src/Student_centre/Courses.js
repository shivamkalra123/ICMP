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
      <div className="grid-container">
        <div className="grid-item">
          <table className="table-heading">
            <thead>
              <tr>
                <th>French</th>
              </tr>
            </thead>
          </table>
          <table className="column-border">
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>French A1/A2</td>
                <td>Basic</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>French B1/B2</td>
                <td>Intermediate</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>French C1/C2</td>
                <td>Proficient</td>
              </tr>
            </tbody>
          </table>
          
        </div>
        <div className="grid-item">
          <table className="table-heading">
            <thead>
              <tr>
                <th>German</th>
              </tr>
            </thead>
          </table>
          <table className="column-border">
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>German A1/A2</td>
                <td>Basic</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>German B1/B2</td>
                <td>Intermediate</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>German C1</td>
                <td>Proficient</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid-item">
          <table className="table-heading">
            <thead>
              <tr>
                <th>Spanish</th>
              </tr>
            </thead>
          </table>
          <table className="column-border">
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Spanish A1/A2</td>
                <td>Basic</td>
              </tr>
            </tbody>
            <tbody>
              <tr>
                <td>Spanish B1/B2</td>
                <td>Intermediate</td>
              </tr>
            </tbody>
            
          </table>
        </div>
        <div className="grid-item">
          <table className="table-heading">
            <thead>
              <tr>
                <th>Dutch</th>
              </tr>
            </thead>
          </table>
          <table className="column-border">
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Dutch A1/A2</td>
                <td>Basic/Intermediate</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid-item">
          <table className="table-heading">
            <thead>
              <tr>
                <th>Table 5</th>
              </tr>
            </thead>
          </table>
          <table className="column-border">
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Cell 1</td>
                <td>Data Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="grid-item">
          <table className="table-heading">
            <thead>
              <tr>
                <th>Table 5</th>
              </tr>
            </thead>
          </table>
          <table className="column-border">
            <thead>
              <tr>
                <th>Course</th>
                <th>Level</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Data Cell 1</td>
                <td>Data Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
   
    </div>
    <Footer/>
    </div>
  )
}

export default Courses;
