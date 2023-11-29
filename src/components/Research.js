import React from "react";
import Navbar from "./nav";
import "../comp_css/research.css";

const Research = () => {
  return (
    <div>
      <Navbar />

      <div className="about3">
        <div className="overlay"></div>

        <div className="aboutHeading">
          <h1 className="a">Research</h1>
        </div>
        <div className="headingCover">
          <div className="headingAcademics">
            <h1 className="heade">Research</h1>
            <div className="subHead">
              <p className="psubHead2">
                ICMP is a research powerhouse. We consistently rank as one of
                the world’s top research universities across many fields.
                <br></br>
                <br></br>
                <p className="psubHead2">
                  Our partnerships with universities, industries, government and
                  communities worldwide give research at ICMP global reach and
                  impact. ICMP innovations and discoveries are advancing
                  knowledge and improving lives.
                </p>
              </p>
            </div>
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
      </div>
      <div className="reasearch-margin">
        <div className="reasearch-blogs">
          <div className="blog-1">
            <div className="blogImage">
              <img
                src="https://www.ubc.ca/_assets/img/research/research_excellence-768x280.jpg"
                alt="NotFound"
              ></img>
              <div className="blogText">
                <h1>Research Excellence</h1>
                <p>
                  Discover the strength and breadth of our research activities.
                </p>
                <a>Get an overview of ICMP research</a>
              </div>
            </div>
          </div>
          <div className="blog-1">
            <div className="blogImage">
              <img
                src="https://www.ubc.ca/_assets/img/research/research_excellence-768x280.jpg"
                alt="NotFound"
              ></img>
              <div className="blogText">
                <h1>Innovation ICMP</h1>
                <p>
                  Find out how we create new inventions with commercial
                  applications.
                </p>
                <a>Learn how ICMP's research impacts society</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Research;
