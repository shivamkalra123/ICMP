import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';
import '../comp_css/faq.css'
import Navbar from './nav';
import Footer from './footer';

const Faqs = () => {
  return (
    <div>
      <div className="wrapper1">
        <Navbar />
        <div className="main-title">ICMP FAQ</div>
        <input type="radio" id="radioYourAccount" name="accordion" />
        <label className="item" htmlFor="radioYourAccount">
          <div className="title">Your Account</div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquid harum velit sed similique exercitationem, quasi in, nulla
            quos accusamus nemo vel dolores. Est id sint dolore, deserunt
            dolorum accusantium.
          </div>
        </label>
        <input type="radio" id="radioPaymentPricing" name="accordion" />
        <label className="item" htmlFor="radioPaymentPricing">
          <div className="title">Payment & Pricing</div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquid harum velit sed similique exercitationem, quasi in, nulla
            quos accusamus nemo vel dolores. Est id sint dolore, deserunt
            dolorum accusantium.
          </div>
        </label>
        <input type="radio" id="radioReturnsRefunds" name="accordion" />
        <label className="item" htmlFor="radioReturnsRefunds">
          <div className="title">Returns & Refunds</div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquid harum velit sed similique exercitationem, quasi in, nulla
            quos accusamus nemo vel dolores. Est id sint dolore, deserunt
            dolorum accusantium.
          </div>
        </label>
        <input type="radio" id="radioShippingPickup" name="accordion" />
        <label className="item" htmlFor="radioShippingPickup">
          <div className="title">Shipping & Pickup</div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquid harum velit sed similique exercitationem, quasi in, nulla
            quos accusamus nemo vel dolores. Est id sint dolore, deserunt
            dolorum accusantium.
          </div>
        </label>
        <input type="radio" id="radioViewingChangingOrders" name="accordion" />
        <label className="item" htmlFor="radioViewingChangingOrders">
          <div className="title">Viewing & Changing Orders</div>
          <div className="content">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis
            aliquid harum velit sed similique exercitationem, quasi in, nulla
            quos accusamus nemo vel dolores. Est id sint dolore, deserunt
            dolorum accusantium.
          </div>
        </label>
     
      </div>
      <Footer/>
    </div>
  );
}

export default Faqs;
