import React from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import '../comp_css/health.css'
import Navbar from './nav';
import Gallery from './gallery';
import Footer from './footer';

const Health = () => {
    const images = [
        "https://images.unsplash.com/photo-1664990594674-418f27010fee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1932&q=80",
        "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
        "https://images.unsplash.com/photo-1517488629431-6427e0ee1e5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    ];

    return (
      <div>
        <Navbar/>
        <div className='health'>
          <h1 className='health_heading'>Good <span className='mental'>Mental</span></h1>
          <h1 className='health_heading1'><span className='mental'>Health</span> For All</h1>
        <Slide >
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[0]})` }}>
                   
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[1]})` }}>
                 
                </div>
            </div>
            <div className="each-slide-effect">
                <div style={{ 'backgroundImage': `url(${images[2]})` }}>
                 
                </div>
            </div>
            
        </Slide>
        </div>
        <div className='contain_health'>
        <h1>You and your community should be able to live life to the full. 
          That's why we're continuing to find ways to prevent mental health problems.</h1>
          </div>
          <div className='box'>
            <div className='box_heading'>
            <h1 className='hold_atea'>Hold a Tea & Talk event for World Mental Health Day</h1>
            <h1 className='hold_atea1'>World Mental Health Day is 10 October. Start planning your Tea & Talk event today!</h1>
            <div className='link_plan'>
            <a href='#' className='plan'>Plan your Tea & Talk event</a>
            </div>
            </div>
          
          </div>
          <div class="scroll-container">
  <img className='img' src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80" alt="Cinque Terre" ></img>
  <img className='img' src="https://plus.unsplash.com/premium_photo-1673603988651-99f79e4ae7d3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Forest" ></img>
  <img className='img' src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1948&q=80" alt="Northern Lights" ></img>
  <img className='img' src="https://images.unsplash.com/photo-1426604966848-d7adac402bff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Mountains" ></img>
  
</div>
<Footer/>
        </div>
    );
};

export default Health;