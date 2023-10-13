import React from 'react'
import '../Student_centre/admin_css/student_centre.css'
import ParentComponent from './admin_nav'
import { FaCalendar, FaUtensils,FaMicrophone } from 'react-icons/fa';
import Footer from '../components/footer';
const student_centre = () => {
 
  return (
    <div className='cover'>
    <ParentComponent/>
  <div className='containing'>
    <h1 className='student_heading'>Student Center</h1>
     
        <section id="announcements">
        <h2>Announcements</h2>
      <div className="announcement">
        <h3><FaCalendar /> Important Dates for Fall Semester</h3>
        <p>Make sure to mark your calendars for the start of classes, registration deadlines, and other important events.</p>
      </div>
      <div className="announcement">
        <h3><FaUtensils /> New Food Options in the Cafeteria</h3>
        <p>We've introduced exciting new menu items in the cafeteria. Come and check them out!</p>
      </div>
      <div className="announcement">
        <h3><FaMicrophone /> Voice Assistant Feature</h3>
        <p>We've added a new voice assistant to help you navigate our platform. Try it out!</p>
      </div>
    
</section>
        <div class="account-tab">
        <h2 className='dashboard'>Dashboard</h2>
        <hr></hr>
          <div className='cards_container'>
            
            
    <div class="card">
  <img class="card-image" src="https://images.unsplash.com/photo-1524813686514-a57563d77965?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80" alt="Housing icon"></img>
  <h3>Housing</h3>
  <p>Your housing details go here...</p>
  <button class="explore-btn">Explore</button>
</div>
<div class="card">
  <img class="card-image" src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Classes icon"></img>
  <h3>Classes</h3>
  <p>Your enrolled classes go here...</p>
  <button class="explore-btn">Explore</button>
</div>
<div class="card">
  <img class="card-image" src="https://images.unsplash.com/photo-1503428593586-e225b39bddfe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Courses offered icon"></img>
  <h3>Courses Offered</h3>
  <p>List of courses offered goes here...</p>
  <button class="explore-btn">Explore</button>
</div>
<div class="card">
  <img class="card-image" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Grades icon"></img>
  <h3>Grades</h3>
  <p>Your grades information goes here...</p>
  <button class="explore-btn">Explore</button>
</div>
<div class="card">
  <img class="card-image" src="https://images.unsplash.com/photo-1623658052801-3dc4c0ea3489?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Health services icon"></img>
  <h3>Health Services</h3>
  <p>Health Services...</p>
  <button class="explore-btn">Explore</button>
</div>
<div class="card">
  <img class="card-image" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Career services icon"></img>
  <h3>Career Services</h3>
  <p>Career Services...</p>
  <button class="explore-btn">Explore</button>
</div>

    </div>
</div>
</div>
<Footer/>
    </div>
  )
}

export default student_centre