import React from "react";
import "../comp_css/news.css";
import Gallery from "./gallery";
import Navbar from "./nav";

const News = () => {
  return (
    <div>
      <Navbar />

      <div className="about4">
        <div className="overlay"></div>

        <div className="aboutHeading">
          <h1 className="a">News</h1>
        </div>
      </div>
      <div class="main">
        <div class="top">
          <div class="left">
            <img
              src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
              alt=""
            />
          </div>
          <div class="right">
            <div class="title">
              The BART seat-slashing gang you've never heard about
            </div>
            <div class="text">
              <ul>
                <li>
                  The 1979 BART tunnel nightmare: 5 minutes from 'catastrophe'
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div class="bottom">
          <div class="card">
            <div class="image">
              <img
                src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
            <div class="title">
              Who's Bob behind Bob's donuts? It's complicated and...
            </div>
            <div class="text">
              <ul>
                <li>This SP legend runs the best corner store in the galaxy</li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img
                src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
            <div class="title">
              Who's Bob behind Bob's donuts? It's complicated and...
            </div>
            <div class="text">
              <ul>
                <li>This SP legend runs the best corner store in the galaxy</li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="image">
              <img
                src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                alt=""
              />
            </div>
            <div class="title">
              Who's Bob behind Bob's donuts? It's complicated and...
            </div>
            <div class="text">
              <ul>
                <li>This SP legend runs the best corner store in the galaxy</li>
              </ul>
            </div>
          </div>
        </div>

        <div class="picks">
          <div class="heading">TODAY'S TOP PICKS</div>
          <div class="cards-t">
            <div class="card-t">
              <div class="image">
                <img
                  src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>
              <div class="title">
                Kelly Slater's surf ranch is all about next-wave design
              </div>
            </div>
            <div class="card-t">
              <div class="image">
                <img
                  src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>
              <div class="title">
                Kelly Slater's surf ranch is all about next-wave design
              </div>
            </div>
            <div class="card-t">
              <div class="image">
                <img
                  src="https://images.unsplash.com/photo-1700902741852-ecf2bd2c26eb?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHx8"
                  alt=""
                />
              </div>
              <div class="title">
                Kelly Slater's surf ranch is all about next-wave design
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default News;
