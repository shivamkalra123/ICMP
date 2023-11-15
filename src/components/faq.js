import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
import { FaChevronDown } from 'react-icons/fa';
import '../comp_css/faq.css';
import Navbar from './nav';
import Footer from './footer';

const Faqs = () => {
  const [open, setOpen] = useState(null);

  // React Spring animation config
  const contentSpring = useSpring({
    opacity: open === null ? 1 : 0.2,
    maxHeight: open === null ? 1000 : 200, // Set your desired max height
  });

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <div className="wrapper1">
        <Navbar />
        <h1 className="main-head">ICMP FAQ</h1>
        <div>
          <details open={open === 0} onClick={() => toggleFAQ(0)}>
            <summary>
              How do you create an accordion?
            </summary>
            {/* Wrap the content in animated.div from React Spring */}
            <animated.div style={contentSpring}>
              Easy! As long as you don't have to support IE11 or older browsers you could use <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> natively.
            </animated.div>
          </details>
          {/* Add more details elements with summaries and content */}
        </div>
      </div>
    </div>
  );
};

export default Faqs;
