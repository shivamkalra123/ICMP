import React, { useEffect } from 'react';
import '../comp_css/gallery.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Gallery = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const articles = [
    {
      title: "International Artist Feature: Malaysia",
      author: "Mary Winkler",
      link: "https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg"
    },
    {
      title: "How to Conduct Remote Usability Testing",
      author: "Harry Brignull",
      link: "https://webdesign.tutsplus.com/articles/how-to-conduct-remote-usability-testing--cms-27045",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/users-2.png"
    },
    {
      title: "Created by You, July Edition",
      author: "Melody Nieves",
      link: "https://design.tutsplus.com/articles/envato-tuts-community-challenge-created-by-you-july-edition--cms-26724",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-5.jpg"
    },
    {
      title: "How to Code a Scrolling “Alien Lander” Website",
      author: "Kezz Bracey",
      link: "https://webdesign.tutsplus.com/tutorials/how-to-code-a-scrolling-alien-lander-website--cms-26826",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/landing.png"
    },
    {
      title: "How to Create a “Stranger Things” Text Effect in Adobe Photoshop",
      author: "Rose",
      link: "https://design.tutsplus.com/tutorials/stranger-things-inspired-text-effect--cms-27139",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/strange.jpg"
    },
    {
      title: "5 Inspirational Business Portraits and How to Make Your Own",
      author: "Marie Gardiner",
      link: "https://photography.tutsplus.com/articles/5-inspirational-business-portraits-and-how-to-make-your-own--cms-27338",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flor.jpg"
    },
    {
      title: "Notes From Behind the Firewall: The State of Web Design in China",
      author: "Kendra Schaefer",
      link: "https://webdesign.tutsplus.com/articles/notes-from-behind-the-firewall-the-state-of-web-design-in-china--cms-22281",
      thumbnail: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/china.png"
    }
  ];

  return (
    <div>
      <div className='gallery'>
        <h1 className='gall_heading'>
          Explore ICMP
        </h1>
      </div>
      <div className="band">
        {articles.map((article, index) => (
          <div key={index} className={`item-${index + 1}`}>
            <a href={article.link} className="card">
              <div className="thumb" style={{ backgroundImage: `url(${article.thumbnail})` }}></div>
              <article>
                <h1>{article.title}</h1>
                <span>{article.author}</span>
              </article>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;
