import React from "react";
import Navbar from "./nav";
import "../comp_css/academics.css";
import Academi from'../media/academics.jpg'

const Academics = () => {
  return (
    <div className="about1">
      <div className="overlay"></div>
      <Navbar />
      <div className="aboutHeading">
        <h1 className="a">Academics</h1>
      </div>
      <div className="headingAcademics">
        <h1 className="heade">Academics</h1>
        <div className="subHead">
          <p className="psubHead">
            The heartbeat of ICMP University is the dynamic realm of academic
            exploration. Exceptional students and faculty are drawn to our
            institution, enticed by the prospect of contributing to a vibrant
            intellectual and creative community—one marked by collaborative
            spirit, inventive thinking, and brilliant teaching. ICMP students
            are immersed in an enriching university experience, seamlessly
            blending global perspectives with our London roots. Learning extends
            far beyond the classroom, embracing opportunities inherent in an
            institution seamlessly woven into the fabric of the city. Our
            students and faculty emerge as global citizens, navigating diverse
            cultures, engaging with students and scholars worldwide, and tapping
            into a network of research opportunities that span the globe.
          </p>
        </div>
      </div>
      <div className="headerLinks">
        <h2>In This Section</h2>
      </div>
      <div className="allLinks">
        <a className="Headlinks">Academic Programs</a>
        <a className="Headlinks">Accelerated Studies</a>
        <a className="Headlinks">Schools and Colleges</a>
        <a className="Headlinks">Studying Abroad</a>
        <a className="Headlinks">ICMP Online</a>
      </div>
      <div className="resources">
        <p className="presources">Academic Resources for Students</p>
        <h1 className="hresources">
          Tap Into Your Academic<br></br>Resources
        </h1>
        <p className="presources1">
          Start to construct your academic plans to achieve your career and life
          goals.
        </p>
        <section class="articles">
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1011/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>Course Search</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href="#" class="read-more">
                  Read more{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/1005/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>University Registrar</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href="#" class="read-more">
                  Read more{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
          <article>
            <div class="article-wrapper">
              <figure>
                <img src="https://picsum.photos/id/103/800/450" alt="" />
              </figure>
              <div class="article-body">
                <h2>ICMP Brightspace</h2>
                <p>
                  Curabitur convallis ac quam vitae laoreet. Nulla mauris ante,
                  euismod sed lacus sit amet, congue bibendum eros. Etiam mattis
                  lobortis porta. Vestibulum ultrices iaculis enim imperdiet
                  egestas.
                </p>
                <a href="#" class="read-more">
                  Read more{" "}
                  <span class="sr-only">about this is some title</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </article>
        </section>
      </div>
      <div className="Institue">
        <h1>Centers and Institutes</h1>
        <hr></hr>
        <div className="pinstitute">
          <p>
            Institute of Comprehensive Modern Pedagogy is a cutting-edge hub,
            driving innovative teaching methods. With advanced lecture halls and
            screening facilities, it's a focal point for research and education.
            The institute embodies a commitment to excellence, shaping the
            future of education by embracing modern pedagogical techniques and
            technology, fostering innovation and inclusivity.
          </p>
        </div>
        <div className="ainstitue">
        <a className="read_more">READ MORE</a>
        </div>
        <img className="academics" src={Academi} alt="notfound"/>
      </div>
    </div>
  );
};

export default Academics;
