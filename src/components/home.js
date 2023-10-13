import React from 'react'
import '../comp_css/home.css'
import '../components/nav'
import Gallery from './gallery'
import Navbar from '../components/nav'
import Footer from './footer'

const Home = () => {
  return (
   
    <div className='parent'>
       <Navbar/>
   
   
  
    <div className='back'>
      <div className='banner'>
       
       <div className='overlay'></div>
      </div>
     
      
      <div className='banner_head'>
      <h2 className='heading'>ICMP</h2>
      <p className='subtitle'>Institute of Comprehensive Modern Pedagogy</p>
     
      
      </div>
      
    </div>
    <div className='banner_links'>
    <a className='admissions' href='#'>Admissions</a>
      <a className='admissions' href='#'>Know About Us</a>
      </div>
      <Gallery/>
      <Footer/>
    </div>
    
  )
}

export default Home;
