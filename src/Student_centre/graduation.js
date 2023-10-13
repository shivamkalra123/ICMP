import React from 'react'
import '../Student_centre/admin_css/graduation.css'
import ParentComponent from './admin_nav'
import Footer from '../components/footer'

const graduation = () => {
  return (
    <div>
    <div className='cover1'>
      <ParentComponent />
      <div className='containing'>
        <div className='wrap'>


        <h1   className='Degree'>Institute of Comprehensive Modern Pedagogy Bachelor of Science Degree Requirements</h1>

        <ul style={{ marginTop: '40px' }}>
          <li>Students must complete the faculty-wide requirements for one of the degree options (e.g., major, honours) defined in this chapter of the Calendar.</li>
          <li>Students must complete the specific course requirements for a defined specialization (e.g., Major in Music Production), including all course and credit requirements.</li>
          <li>At least 50% of the credits required must be obtained with courses taken while registered in the Institute of Comprehensive Modern Pedagogy Bachelor of Science program.</li>
          <li>Students are reminded that regulations apply as listed under the Bachelor of Science, Performance Review and Continuation. Choice of option and specialization will be limited if good academic standing is not maintained or if academically more qualified students fill limited spaces.</li>
          <li>A major, combined major, double major, or General Science option requires a minimum of 120 credits but may require more. A dual degree will require more than 120 credits but some combinations may be completed in less than the minimum of 180 credits required to complete both a first and second degree sequentially. An honours or combined honours option requires a minimum of 132 credits, but may require more. The B.Sc. degree must be obtained within a maximum of 180 attempted credits including credits transferred to the degree.</li>
        </ul>

        <table style={{ marginTop: '40px' }}>
          <thead>
            <tr>
              <th>Subject</th>
              <th>Required Credits</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>English</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Mathematics</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Science</td>
              <td>6</td>
            </tr>
            <tr>
              <td>History</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Arts</td>
              <td>6</td>
            </tr>
            <tr>
              <td>Foreign Language</td>
              <td>6</td>
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

export default graduation
