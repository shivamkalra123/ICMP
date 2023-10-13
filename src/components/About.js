import React from 'react'
import Navbar from './nav'
import '../comp_css/about.css'
import Footer from './footer'

const About = () => {
    return (
        <div className='about'>
            <div className='overlay'>

            </div>
            <Navbar />
            <div className='aboutHeading'>
                <h1 className='a' >
                    About ICMP
                </h1>
            </div>
            <div className='para'>
                <h4 className='ha'>
                    <h2 className='small_head'><span className='I'>I</span>CMP College is a remarkable place. We are now well into our sixth century, and our former pupils include scholars, war heroes, musicians, Olympians, a Nobel Prize laureate, a Hollywood film director, and a saint.<br></br></h2>
                    <br></br>
                    Our success in public examinations, in securing places at top universities, and in an astonishing array of extra-curricular pursuits ensure that we continue this proud tradition. We do so by nurturing the individual potential of each of our pupils, and above all we believe that learning is as fun as it is fulfilling.<br></br>

                    We achieve so highly not because we teach to the test; the challenge of what we offer goes far beyond that. The quality of the conversations in our classrooms and beyond them gives you a sense of what makes ICMP College distinctive and inspiring. The atmosphere here is both relaxed and rigorous, both high-octane and down-to-earth. Everything we do focused on the needs of the individual child.<br></br>

                    ICMP College was founded in 1480 by William Waynflete: schoolmaster, bishop of Winchester and Lord Chancellor of England. Being of humble origins, Waynflete was determined that others of ability should be given the opportunity to learn, to serve and to prosper as he did. And so ICMP College offers a transformative education in our global university city, the community to which we are proud to make a deep contribution. We also offer substantial help with fees as part of our mission to ensure that people of all backgrounds continue to learn together and maintain the school’s diverse strength.<br></br>

                    We remain true to Waynflete’s legacy today. Although our current pupils may not aspire to any or all of the vocations listed above, we aim to inspire them to flourish in life by flourishing here.<br></br>

                    On this website you will find our News and Reports by Inspectors. In the Admissions section there is information for prospective parents and pupils, including details of Open Events, and how to apply for a Bursary.<br></br>

                    Meeting our pupils and staff is the best way of understanding what makes ICMP College the exceptional place it is, and so we look forward to welcoming you here.<br></br>

                    Helen Pike Master

                </h4>
            </div>
            <Footer/>
        </div>


    )
}

export default About