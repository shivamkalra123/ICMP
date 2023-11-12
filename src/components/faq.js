import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../comp_css/faq.css';
import Navbar from './nav';
import Footer from './footer';

const Faqs = () => {
  const [open, setOpen] = useState(null);

  const toggleFAQ = (index) => {
    setOpen(open === index ? null : index);
  };

  return (
    <div>
      <div className="wrapper1">
        <Navbar />
        <h1 className='main-head'>ICMP FAQ</h1>
        <div>
          <details open={open === 0} onClick={() => toggleFAQ(0)}>
            <summary>
              How do you create an accordion?
            </summary>
            <div>
              Easy! As long as you don't have to support IE11 or older browsers you could use <code>&lt;details&gt;</code> and <code>&lt;summary&gt;</code> natively.
            </div>
          </details>
          {/* Add more details elements with summaries and content */}
        </div>
      </div>
    </div>
  );
}

export default Faqs;
